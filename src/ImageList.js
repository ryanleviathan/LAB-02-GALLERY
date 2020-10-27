import React, { Component } from 'react'
import ImageItem from './ImageItem.js';
import data from './data.js';

// import img1 from "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg";
// import img2 from "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80";
// import img3 from "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg";
// import img4 from "https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80";
// import img5 from "https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg";
// import img6 from "https://i.pinimg.com/originals/16/cf/2a/16cf2a0b3fd51b9bee08bb6296193b75.jpg";
// import img7 from "https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg";
// import img9 from "https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003";
// import img10 from "https://ae01.alicdn.com/kf/HTB18GwSQVXXXXaZaXXXq6xXFXXXh/Animal-Cosplay-Costume-Narwhal-Onesie-Mens-Womens-Cartoon-Whale-Pajamas.jpg";
// import img11 from "https://www.shopmascot.com/image/cache/mascotnew/new196-800x800.jpg";
// import img12 from "https://www.tinselbox.com/wp-content/uploads/2018/03/I-BELIEVE-IN-UNICORNS-FREE-PRINTABLE-WATERCOLOR-7-of-1.jpg";
// import img13 from "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg/220px-Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg";
// import img14 from "http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi";
// import img15 from "https://cdn.modernfarmer.com/wp-content/uploads/2014/08/28476658_9c97f35096_o.jpg";
// import img16 from "https://cdn.modernfarmer.com/wp-content/uploads/2014/08/addax.jpg";
// import img17 from "https://cbsnews3.cbsistatic.com/hub/i/r/2013/03/05/5b414225-a645-11e2-a3f0-029118418759/thumbnail/620x350/2d4cf24685b45c22912e64d2004fec8d/Baby_Mouflon_Wild_Sheep.jpg";
// import img18 from "https://cdn.modernfarmer.com/wp-content/uploads/2014/08/chameleon.jpg";
// import img19 from "https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg";
// import img20 from "https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false";
// import img21 from "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg";

export default class ImageList extends Component {
    render() {
        return (
            <section>
                {data.map(item => {
                    return <ImageItem
                    image = {item.url}
                    name = {item.title}
                    description = {item.description}
                    horns = {item.horns} />
                })}
            </section>
        )
    }
}
