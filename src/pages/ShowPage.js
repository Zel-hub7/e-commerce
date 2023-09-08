import SHOP_DATA from "./ShowData";
import CollectionPreview from "../components/Preview";

const ShowPage = () => {
    return (
      <div>
        {SHOP_DATA.map((category) => (
          <CollectionPreview key={category.key} items={category.items} title={category.title} />
        ))}
      </div>
    );
  };
export default ShowPage;
