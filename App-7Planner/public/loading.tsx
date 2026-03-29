// app/loading.tsx
import styles from './loading.module.css'

export default function Loading() {
  return (
    <div className={styles.overlay}>
      {/* Opção 1: Se você tiver um GIF ou Vídeo */}
      <video 
        src="/assets/loading-animation.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={styles.logoLoading} 
      />
    </div>
  )
}