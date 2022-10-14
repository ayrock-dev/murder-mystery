import clsx from 'clsx';

export default function SpookySpider({ className, style }) {
  return (
    <div className={className} style={style}>
      <div className="inset-0 h-full">
        <div className="flex flex-col h-1/2 border-l-8 border-slate" />
        <img src="spooky-spider.png" style="transform: translateX(-50%);" />
      </div>
    </div>
  );
}
