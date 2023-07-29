import Link from 'next/link';
import { Button } from './ui/button';
import { Icons } from './ui/icons';
import { siteConfig } from '@/config';
import { useTheme } from 'next-themes';
import { themes } from '@/lib/utils';

export default function Topbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex w-full">
      <div className="flex justify-start items-center">
        <Icons.Logo className="h-5 w-5 text-black dark:text-white mr-2" />
        <span className="font-bold text-xl text-black dark:text-white">
          {siteConfig.title}
        </span>
      </div>

      <div className="ml-auto hidden md:flex">
        <Link href={siteConfig.github} target="_blank">
          <Button className="" variant={'ghost'}>
            <Icons.GitHub className="h-5 w-5 fill-current" />
          </Button>
        </Link>
        <Link href={siteConfig.linkedin}>
          <Button variant={'ghost'}>
            <Icons.Linkedin className="h-5 w-5 fill-current" />
          </Button>
        </Link>
        <Link href={siteConfig.twitter}>
          <Button variant={'ghost'}>
            <Icons.Twitter className="h-5 w-5 fill-current" />
          </Button>
        </Link>
        <Button
          onClick={() =>
            theme === themes.DARK
              ? setTheme(themes.LIGHT)
              : setTheme(themes.DARK)
          }
          variant={'ghost'}
        >
          {theme === themes.DARK ? (
            <Icons.Moon className="h-5 w-5 fill-current" />
          ) : (
            <Icons.Sun className="h-5 w-5 fill-current" />
          )}
        </Button>
      </div>
    </nav>
  );
}
