import { useParams } from "react-router-dom";



function ProductScreen(){

    const parmas =useParams();
    const {slug} =parmas;
    return <div>

      <h1>{slug}</h1>


    </div>





}
export default ProductScreen;