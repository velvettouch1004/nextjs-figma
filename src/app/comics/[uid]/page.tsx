import ComicDetailsTab from "@/components/comics/ComicDetailsTab";
import ComicProfileBanner from "@/components/comics/ComicProfileBanner";

export default function ComicPage() {
  return (
    <div>
      <ComicProfileBanner
        views={123}
        imgSrc={"/Frame.png"}
        title={"Revenant"}
      />
      <div className="py-4">
        <ComicDetailsTab
          views={123}
          imgSrc={"https://wallpapercave.com/wp/wp5501287.png"}
          title={"Revenant"}
        />
      </div>
    </div>
  );
}
