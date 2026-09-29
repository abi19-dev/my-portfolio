import { useImage } from '../images';

// An <img> that shows a shimmering sticker slot until it has loaded, then fades in.
// `pop` also lets it settle from a slight tilt; `label` is text inside the slot.
// The parent must be positioned, since the slot covers it.
export default function LoadingImg({ src, alt, label, pop, className, style, ...rest }) {
  const [ready, imgProps] = useImage(src);
  const classes = ['loading-img', pop && 'pop', ready && 'ready', className].filter(Boolean).join(' ');

  return (
    <>
      {!ready && <span className="slot" aria-hidden="true">{label}</span>}
      <img src={src} alt={alt} className={classes} style={style} {...imgProps} {...rest} />
    </>
  );
}
