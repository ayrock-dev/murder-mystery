import clsx from 'clsx';

import SpookySpider from './spooky-spider';

export default function SpookyBranch({ className }) {
  return (
    <div className={clsx('', className)}>
      <div className="relative">
        <img src="spooky-branch.png" />
        <SpookySpider
          className="absolute transform"
          style="left: 175px; top: 188px;"
        />
      </div>
    </div>
  );
}
