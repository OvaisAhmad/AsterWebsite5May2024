import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale
  );

  return (
    <>
    <span className="text-muted cursor-pointer">
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <span key={"locale-" + locale}>
            <Link href={{ pathname, query }} as={asPath} locale={locale} className="text-black no-underline">
              <div className="self-stretch flex-1 flex flex-row p-0.5 items-start justify-center">
                <div className="rounded-21xl bg-aster-blue w-14 h-8 overflow-hidden shrink-0 flex flex-row py-[7px] px-[15px] box-border items-start justify-start" style={{ borderRadius: 50}}>
                  {activeLocale === "en" && locale === "ar" ? (
                    <b className="flex-1 text-white relative flex items-center justify-center h-[17px]">
                    EN
                  </b>
                  ) : <b className="flex-1 text-white my-0 mx-[!important] top-[calc(50%_-_10px)] left-[calc(70%_-_10px)] flex items-center justify-center w-[30px] h-4 shrink-0 z-[0]">
                  عربي
                </b>}
                </div>
                <div className="rounded-21xl w-14 h-8 overflow-hidden shrink-0 flex flex-row py-[7px] px-[15px] box-border items-start justify-start relative text-sm text-black">
                  {activeLocale === "ar" && locale === "en" ? (
                    <b className="flex-1 relative flex items-center justify-center h-[17px]">
                      EN
                    </b>
                  ) : <b className="flex-1 my-0 mx-[!important] top-[calc(50%_-_10px)] left-[calc(70%_-_10px)] flex items-center justify-center w-[30px] h-4 shrink-0 z-[0]">
                  عربي
                </b>
                    }
                </div>
              </div>
            </Link>
          </span>
        );
      })}
    </span>
    </>
  );
}


