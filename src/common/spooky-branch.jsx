import SpookySpider from './spooky-spider';

export default function SpookyBranch({ className }) {
  return (
    <div className={className}>
      <div className="relative">
        <SpookySpider className="absolute left-[175px] top-[188px] transform" />
        <img className="transform" src="spooky-branch.png" />
      </div>
    </div>
  );
}
