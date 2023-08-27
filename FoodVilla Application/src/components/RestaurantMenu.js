import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loader from "../Assets/Images/loader_gif.gif"
import "../Assets/CSS/RestaurantMenu.css"
import discountImg from "../Assets/Images/discountImg.png"

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurantInfo, setRestaurantInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");

            const resData = await response.json();
            setRestaurantInfo(resData);
            setIsLoading(false);
        }
        catch (error) {
            console.error("Error occurred while fetching data", error);
            setIsLoading(false);
        }
    }

    // Extract id, name, and avgRating from the object
    const restaurantDetail = restaurantInfo.data?.cards[0]?.card?.card?.info || {};

    return (
        <>
            {
                isLoading ?
                    (
                        <div className="loaderContainer">
                            <img className="menuLoader" src={loader} alt="loader image" />
                        </div>
                    ) : (
                        <>
                            <main className="restaurantContainer">
                                <section className="restaurantDetails">
                                    <div className="resData">
                                        <h2>{restaurantDetail?.name}</h2>
                                        <p>{restaurantDetail?.labels[2]?.message}</p>
                                        <p>{restaurantDetail?.areaName} , {restaurantDetail?.sla?.lastMileTravelString} </p>
                                    </div>
                                    <div className="ratingData">
                                        <p className="firstPara"><i className="fa-solid fa-star star"></i> {restaurantDetail.avgRating} </p>
                                        <hr className="newHr" />
                                        <p className="ratingCount">{restaurantDetail.totalRatingsString}</p>
                                    </div>
                                </section>

                                <hr />

                                <section className="restOtherDetails">
                                    <div className="deliveryData">
                                        <h4><i class="fa-solid fa-clock"></i> {restaurantDetail?.sla?.slaString}</h4>
                                        <h4><i class="fa-solid fa-indian-rupee-sign ruppeIcon"></i> {restaurantDetail?.costForTwoMessage}</h4>
                                    </div>

                                    <div className="resAddress">
                                        <h4>Restaurant Address :-  </h4>
                                        <p className="address"> {restaurantDetail?.locality} , {restaurantDetail?.areaName} </p>
                                    </div>
                                </section>

                                <hr />

                                <section className="offers">
                                    <div className="offerContainer">
                                        <img src={discountImg} alt="discount image" />
                                        <h4>{restaurantDetail?.aggregatedDiscountInfo?.descriptionList[0]?.meta}</h4>
                                    </div>

                                    <div className="offerContainer">
                                        <img src={discountImg} alt="discount image" />
                                        <h4>{restaurantDetail?.aggregatedDiscountInfo?.descriptionList[1]?.meta}</h4>
                                    </div>
                                </section>

                            </main>


                            <section className="searchContainer">
                                <input type="text" placeholder="search your favourite item"/>
                                <i class="fa-brands fa-searchengin searchIcon"></i>
                            </section>


                            <section className="restaurantProductsList">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur laudantium reprehenderit quaerat, in a assumenda aut quia blanditiis. Debitis repellendus iste velit quos cumque. Incidunt quidem hic quam sunt expedita. Alias ad magnam optio hic doloremque iusto dolorem eos quam. In dolor nemo fugit ipsa, ratione pariatur architecto voluptate libero mollitia reprehenderit? Sint, quidem! Quos suscipit incidunt recusandae, amet mollitia id! Fugiat quo nostrum cupiditate facere quae vero unde explicabo, minus temporibus repellat aut consectetur voluptas sint, perferendis culpa enim ullam expedita nisi laudantium eveniet omnis nesciunt libero commodi similique? In quos aliquid doloremque, quibusdam quod qui placeat nesciunt consequuntur tenetur odit dolores officiis non ipsa accusamus mollitia similique tempore quas consectetur dolor repellat dolorem impedit? Magni quam velit modi sapiente. Nesciunt sed, quaerat maiores error corrupti illum tempora quos consequatur fugiat nobis! Natus quo minus, sit blanditiis esse harum! Ea nobis ipsa optio obcaecati nulla illo animi aliquid dignissimos, doloribus natus, eligendi, illum nam repellendus modi quos eos quasi iste. Ratione et atque cupiditate, minima esse impedit quia quidem voluptates aperiam harum facilis, temporibus excepturi, deleniti vitae laboriosam laudantium saepe voluptate velit libero odit? Eligendi sit asperiores saepe facilis molestias placeat, perferendis iusto voluptates repellendus, mollitia minus unde aspernatur illum magni, ab sunt doloribus doloremque repudiandae culpa! Eum dolor nobis, aut sint, eaque eligendi ipsa tenetur fuga eius libero omnis illo dignissimos? Deserunt sequi ad placeat ipsa atque minus ab tenetur neque reiciendis consequuntur, aut voluptatibus provident id animi magnam hic temporibus ipsum sint minima praesentium vitae qui tempore. Quis similique consequatur quia quo quos neque autem nihil consectetur dolore iure natus optio enim minima distinctio explicabo suscipit in, iusto asperiores aliquam expedita, provident vel animi, obcaecati debitis! Quaerat beatae magni, consequuntur ea perspiciatis reprehenderit tenetur voluptates consequatur praesentium numquam natus, pariatur nesciunt tempore vitae placeat molestias accusantium sapiente corporis aperiam aspernatur libero enim! Enim totam nulla libero quam? Facere hic, nulla impedit autem accusamus soluta qui sed eos quis quia repellendus mollitia harum sequi dolor ipsum repudiandae accusantium, nostrum molestiae reiciendis minus voluptatem doloribus. Maxime, pariatur quas. Accusantium illum, ex similique aliquid iste incidunt minus excepturi illo. Quod debitis quidem tempore eligendi accusantium? Accusamus odit mollitia vero. Odio ullam rerum facere obcaecati dolorem. Fugiat saepe odit molestiae magni reiciendis accusamus voluptas fuga sed aliquam, natus autem accusantium eligendi excepturi dicta beatae numquam id. Ratione modi porro atque ad expedita quis dolorum, labore, deleniti vel provident nulla earum similique eius accusantium laudantium fugit nostrum. Illo amet voluptates architecto totam? Unde veritatis accusantium vero eaque similique, sit deserunt ex repellendus quasi laborum tenetur officia. Sit amet architecto eius distinctio eos eveniet reiciendis sequi, nam repellendus voluptas blanditiis vitae. Consectetur quibusdam iusto laboriosam cum aliquam. Similique, aperiam eveniet ipsa ut doloribus deleniti aliquid dolores suscipit autem tempore sunt porro nihil nulla voluptate! Nesciunt cum iure ab laborum beatae, natus itaque debitis dolores nihil numquam asperiores sint maxime consequatur ducimus illo blanditiis tempore voluptatem fugiat enim! Quaerat, officia labore! Sunt facilis ducimus corporis illo maiores tempore praesentium officia eius velit quis at accusamus qui explicabo ut beatae sint, neque voluptatibus odio eaque modi quos expedita nisi officiis. A iusto nisi aliquam voluptate. Aperiam illum officia atque deserunt voluptatibus a. A nostrum eaque explicabo suscipit vel at? Accusantium ducimus tempora accusamus saepe ipsa repudiandae quia tempore libero est? Nam nihil natus expedita nesciunt eveniet rerum, at ducimus, nemo, modi assumenda sequi porro totam nulla voluptas et? Illo, ipsa. Quas perferendis quasi accusantium? Recusandae eveniet cumque vero nisi, hic dicta quaerat ipsum numquam soluta ipsa sunt. Quas nulla quia magni cupiditate nostrum perferendis dolorem expedita dicta, placeat eos, vel numquam quis ipsum, natus labore quisquam excepturi? Aliquam commodi autem quis debitis praesentium incidunt porro doloribus corporis vel odit inventore impedit repudiandae voluptas delectus ea, deserunt quas itaque necessitatibus iure reprehenderit libero atque numquam corrupti! Animi impedit aliquid provident mollitia nobis obcaecati corrupti, nam odio repudiandae, quos debitis libero adipisci ipsa voluptatibus officia et fuga sapiente fugit, voluptas molestias natus nulla doloribus repellat veritatis. Aspernatur error minima, incidunt rem asperiores accusamus quasi corrupti pariatur nihil maxime sapiente veritatis totam eveniet cupiditate rerum iusto voluptates cumque enim nemo modi alias similique excepturi obcaecati suscipit. Fuga voluptate rerum ratione quia, delectus quisquam! Tempora, cumque aut. Magni qui sed nostrum voluptate quos quasi nobis, suscipit eos dolor. Voluptate aspernatur nam asperiores labore, debitis, nisi quas iure quia, impedit officiis ipsum ut. Fugit harum veniam molestias debitis magni. Doloremque fugit ipsum consectetur, dolore provident obcaecati voluptatum cum earum! Autem saepe placeat maxime, neque quo numquam dolorum in. Odit alias earum, omnis quidem quasi porro, eligendi perferendis perspiciatis pariatur, quo commodi soluta est ipsam id autem dolore nostrum asperiores! Nam cumque, ducimus delectus deleniti, pariatur suscipit est iure natus accusantium aliquam nisi. Dolores fugiat doloremque molestiae blanditiis natus dolore alias sint aspernatur rem error numquam earum quasi eaque, libero a ex ea recusandae neque perferendis maxime tempore repudiandae beatae. Neque quam quasi adipisci? Officiis ex error eius cupiditate culpa enim assumenda, incidunt numquam unde totam quam asperiores voluptas eaque repudiandae fugiat corporis doloremque in nemo deleniti dignissimos, sit eveniet! Natus voluptatibus perspiciatis aspernatur ipsam. Dolor aliquam assumenda fuga asperiores reprehenderit dolorem quam rem ipsa pariatur aspernatur molestiae sequi ipsam, deserunt illo a fugit, quis tempore odit eos. Nesciunt dolores totam eum ut quod animi nulla voluptas, quos accusamus perspiciatis quo quidem officiis architecto laudantium temporibus soluta tenetur illo optio quam, alias qui? Commodi libero officia molestiae, iusto ea fuga, sed quae temporibus, est ut vitae? Sed amet iste pariatur consequuntur consectetur, laborum explicabo? Qui aspernatur odit molestias, eaque laborum nam corrupti repellendus rerum dolorum officia enim reiciendis. Temporibus aut provident voluptas fuga nisi veritatis reiciendis quos consequuntur! Debitis, veniam accusamus hic magni cumque accusantium inventore vero, amet id beatae eius sunt distinctio voluptatum, aperiam deserunt fuga. Architecto, deleniti voluptate in eveniet, molestias magni quo debitis minima ipsa exercitationem numquam blanditiis quibusdam rerum perspiciatis! Blanditiis beatae optio expedita. Explicabo dolore velit fugiat vel accusamus soluta, itaque mollitia eligendi amet expedita aspernatur. Asperiores iste, optio quia sint natus nisi fugiat? Quasi!</p>
                            </section>
                        </>
                    )
            }
        </>
    )
}

export default RestaurantMenu;
