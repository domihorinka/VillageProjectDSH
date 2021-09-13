import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these activities near you!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                 <ul className="cards__items" >
                     <CardItem 
                     src='C:\Users\19086\Desktop\VillageProjectDSH\VillageProjectDSH\village-activities\public\images\image-01.jpg' 
                    //  can't get this image to work
                     text="POP TOY DRIVE: Power of Perception is hosting our first annual toy drive for Black and Bi-racial kids in our community. Make sure to tell us what toy your child would like during the registration portion!

                     Dates: 01/05/2022 to 01/06/2022
                     Grades: 6-12
                     Location: Santa Monica, CA"
                     label='POP Toy Drive'
                     path='/find-programs'
                     />
                     <CardItem 
                    //  src='images-v/image-01.jpg' 
                    //  can't get this image to work
                     text="Baking for Teens! 3 week baking class!
                     Dates: 12/15/2021 to 12/25/2021
                     Grades: K-3
                     Location: Beverly Hills, CA"
                     label='Baking for Teens!'
                     path='/find-programs'
                     />
                 </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
