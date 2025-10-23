import React, { useMemo, useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  srcSetWidths?: number[]
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, loading, decoding, fetchPriority, sizes, srcSetWidths, ...rest } = props

  // Gate optimized formats behind env flag to avoid 404 if derivatives are not generated
  const enableOptimized = (import.meta as any)?.env?.VITE_OPTIMIZED_IMAGES === 'true'

  // Compute responsive variant srcsets when enabled and src is local
  const responsive = useMemo(() => {
    if (!enableOptimized || !src || typeof src !== 'string') return null
    // Only optimize local public assets
    if (!src.startsWith('/images/') && !src.startsWith('/portfolio/')) return null
    const dot = src.lastIndexOf('.')
    if (dot < 0) return null
    const ext = src.slice(dot).toLowerCase()
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) return null
    const base = src.slice(0, dot)
  const widths = (srcSetWidths && srcSetWidths.length ? srcSetWidths : [480, 768, 1080, 1440])
    const mkSet = (format: 'webp' | 'avif') =>
      widths.map((w) => `${base}-${w}.${format} ${w}w`).join(', ')
    return {
      avif: mkSet('avif'),
      webp: mkSet('webp'),
    }
  }, [enableOptimized, src])

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={ERROR_IMG_SRC}
          alt="Error loading image"
          loading={loading ?? 'lazy'}
          decoding={decoding ?? 'async'}
          fetchPriority={fetchPriority}
          {...rest}
          data-original-url={src}
        />
      </div>
    </div>
  ) : responsive ? (
    <picture>
      {/* Order matters: avif, then webp, then fallback img */}
      <source type="image/avif" srcSet={responsive.avif} sizes={sizes} />
      <source type="image/webp" srcSet={responsive.webp} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        loading={loading ?? 'lazy'}
        decoding={decoding ?? 'async'}
        fetchPriority={fetchPriority}
        {...rest}
        onError={handleError}
      />
    </picture>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading ?? 'lazy'}
      decoding={decoding ?? 'async'}
      fetchPriority={fetchPriority}
      {...rest}
      onError={handleError}
    />
  )
}
