import clsx from 'clsx';

export default function SpookySpider({ className, style }) {
  return (
    <div
      className={clsx(
        className,
        'flex flex-col w-[60px] h-[90px] animate-spider'
      )}
      style={style}
    >
      <div className="h-1/2 border-l border-dark transform"></div>
      <img
        className="w-[60px]"
        src="spooky-spider.png"
        style="transform: translateX(-48%) translateY(-18px);"
      />
    </div>
  );
}
