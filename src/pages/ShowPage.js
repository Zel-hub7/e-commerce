import SHOP_DATA from "./ShowData"
import CollectionPreview from "../components/Preview"

const ShowPage = () => {
    return(
        <div>
            <CollectionPreview items={SHOP_DATA} />
        </div>
    )
}
export default ShowPage