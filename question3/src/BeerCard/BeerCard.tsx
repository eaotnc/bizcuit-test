import './BeerCard.css'
interface BeerDetailInterface {
    _id: string;
    uid: string;
    brand: string;
    name: string;
    style: string;
    hop: string;
    yeast: string;
    malts: string;
    ibu: string;
    alcohol: string;
    blg: string;
    randomCount: number;
}

const BeerCard = (props: {
    beerDetail: BeerDetailInterface
}):
    React.ReactElement => {
    return (
        <div className="beer-card">
            <div>
                <div className="beer-row">
                    <div className="beer-header">_id : </div>
                    <div className="beer-info">{props.beerDetail._id}</div>
                </div>
                <div className="beer-row">
                    <div className="beer-header">uid : </div>
                    <div className="beer-info">{props.beerDetail.uid}</div>
                </div>
                <div className="beer-row">
                    <div className="beer-header">brand : </div>
                    <div className="beer-info">{props.beerDetail.brand}</div>
                </div>
                <div className="beer-row">
                    <div className="beer-header">name : </div>
                    <div className="beer-info">{props.beerDetail.name}</div>
                </div>
                <div className="beer-row">
                    <div className="beer-header">style : </div>
                    <div className="beer-info">{props.beerDetail.style}</div>
                </div>
                <div className="beer-row">
                    <div className="beer-header">hop : </div>
                    <div className="beer-info">{props.beerDetail.hop}</div>
                </div>
                <div className="beer-row">
                    <div className="beer-header">yeast : </div>
                    <div className="beer-info">{props.beerDetail.yeast}</div>
                </div>
                <div className="beer-row">
                    <div className="beer-header">malts : </div>
                    <div className="beer-info">{props.beerDetail.malts}</div>
                </div>
                <div className="beer-row">
                    <div className="beer-header">ibu : </div>
                    <div className="beer-info">{props.beerDetail.ibu}</div>
                </div>
                <div className="beer-row">
                    <div className="beer-header">alcohol : </div>
                    <div className="beer-info">{props.beerDetail.alcohol}</div>
                </div>
                <div className="beer-row">
                    <div className="beer-header">blg : </div>
                    <div className="beer-info">{props.beerDetail.blg}</div>
                </div>
                <div className="beer-row">
                    <div className="beer-header">randomCount : </div>
                    <div className="beer-info">{props.beerDetail.randomCount}</div>
                </div>

            </div>
        </div>);
}

export default BeerCard;