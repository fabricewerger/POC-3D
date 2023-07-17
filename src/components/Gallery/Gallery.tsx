import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import { MouseEventHandler, useRef, useState } from 'react'
import { default as ImageGallery, default as ReactImageGallery, ReactImageGalleryProps } from 'react-image-gallery'
import styles from './Gallery.module.css'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]

type NavComponentProps = {
  disabled: boolean
  direction: 'left' | 'right'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const NavComponent = ({ disabled, direction, onClick }) => {
  return (
    <button
      type='button'
      className={classNames('image-gallery-icon', {
        'image-gallery-left-nav': direction === 'left',
        'image-gallery-right-nav': direction === 'right',
      })}
      disabled={disabled}
      onClick={onClick}
      aria-label={direction === 'left' ? 'leftBtn' : 'rightBtn'}
    >
      {direction === 'left' ? <ChevronLeftIcon className={'h-4 w-4'} /> : <ChevronRightIcon className={'h-4 w-4'} />}
    </button>
  )
}

const ProductGallery = ({ items = [], ...props }: ReactImageGalleryProps) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
  const imageGallery = useRef<ReactImageGallery>(null)

  return (
    <div className={styles.galleryComponent}>
      {items.length > 0 && (
        <ImageGallery
          ref={imageGallery}
          items={images}
          thumbnailPosition={'bottom'}
          showThumbnails={false}
          showBullets={true}
          showPlayButton={false}
          slideDuration={200}
          showFullscreenButton={isFullscreen}
          renderLeftNav={(onClick, disabled) => (
            <NavComponent direction={'left'} disabled={disabled} onClick={onClick} />
          )}
          renderRightNav={(onClick, disabled) => (
            <NavComponent direction={'right'} disabled={disabled} onClick={onClick} />
          )}
          onScreenChange={(state) => setIsFullscreen(state)}
          renderItem={({
            description,
            fullscreen,
            original,
            originalAlt,
            originalHeight,
            originalWidth,
            originalTitle,
            sizes,
            loading,
          }) => {
            const itemSrc = isFullscreen && fullscreen ? fullscreen : original

            return (
              <>
                <Image
                  className='image-gallery-image relative'
                  src={itemSrc}
                  alt={originalAlt || ''}
                  height={1005}
                  width={2100}
                  sizes={isFullscreen ? '100vw' : sizes}
                  title={originalTitle}
                  loading={loading}
                  // onClick={() => (imageGallery.current ? imageGallery.current.fullScreen() : '')}
                />
                {description && <span className='image-gallery-description'>{description}</span>}
              </>
            )
          }}
          renderThumbInner={(item) => {
            return (
              <>
                <span className='image-gallery-thumbnail-inner'>
                  <Image
                    className='image-gallery-thumbnail-image'
                    src={item.thumbnail || item.original}
                    height={500}
                    width={500}
                    alt={`${item.thumbnailAlt || item.originalAlt}`}
                    title={item.thumbnailTitle}
                    loading={item.thumbnailLoading}
                  />
                  {item.thumbnailLabel && <div className='image-gallery-thumbnail-label'>{item.thumbnailLabel}</div>}
                </span>
              </>
            )
          }}
          {...props}
        />
      )}
    </div>
  )
}

export default ProductGallery
