import Simpson from "../simpson/simpson";

function Simpsons(props) {

    let simpsons = props.item;
    return (
        <div>
            {
                simpsons.map((value, index) => (<Simpson item={value} key={index}/>))
            }
        </div>
    );
}

export default Simpsons;