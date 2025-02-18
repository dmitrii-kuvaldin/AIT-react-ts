// import styles from './Youtube.module.css'

export default function Youtube():JSX.Element {
  return (
    <div>
      <h2>Youtube 📺</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Gscaqkkumj0?si=LvKPuB_YUepMtOsg&amp;start=10&&mute=1&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/gqxwX1ZYg58?si=LvKPuB_YUepMtOsg&mute=1&autoplay=1&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}
