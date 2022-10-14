import Jumbotron from './common/jumbotron';
import Page from './common/page';
import SpookyBranch from './common/spooky-branch';

export default function Home() {
  return (
    <Page>
      <Jumbotron>
        <div className="flex-1 flex flex-col items-center space-y-4 py-4">
          <h1 className="text-5xl font-serif">Murder on Broadway</h1>
          <h2 className="text-2xl">
            Can you figure out <em>who did it?</em>
          </h2>
        </div>
      </Jumbotron>
      <section className="container mx-auto">
        <div className="max-w-2xl mx-auto text-light bg-secondary rounded-sm grid p-8 gap-4 grid-cols-3 transform">
          <label>Where</label>
          <span className="col-span-2">
            1502 Broadway
            <br />
            Santa Monica, CA 90404
          </span>
          <label>When</label>
          <span className="col-span-2">November 5, 2022</span>
          <label>Attire</label>
          <span className="col-span-2">Victorian Eccentric Formal</span>
        </div>
      </section>
      <SpookyBranch className="absolute top-0 left-0 transform" />
    </Page>
  );
}
