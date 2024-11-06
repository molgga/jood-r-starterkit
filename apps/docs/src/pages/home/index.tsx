import { Button } from '@apps/ui/components/ui/button';
import { fooooo } from '@jood/my-some-module';
export function Component() {
  console.log(fooooo());
  return (
    <div>
      HOME
      <div className="flex ui-flex tw-flex">1</div>
      <div>
        <Button>1</Button>
      </div>
    </div>
  );
}

Component.displayName = 'PageHomeIndex';
