import React, { useState } from "react";
import data from './images.json';
import Modal from "./modal";

import classes from './pictures.module.css'
import Logo1 from './picturesImg/photos-min/1.jpg';
import Logo1W from './picturesImg/photos/1.jpg'
import Logo2 from './picturesImg/photos-min/2.jpg';
import Logo2W from './picturesImg/photos/2.jpg';
import Logo3 from './picturesImg/photos-min/3.jpg';
import Logo3W from './picturesImg/photos/3.jpg';
import Logo4 from './picturesImg/photos-min/4.jpg';
import Logo4W from './picturesImg/photos/4.jpg';

import Logo5 from './picturesImg/photos-min/5.jpg';
import Logo5W from './picturesImg/photos/5.jpg';


function Pictures (){

	const [clickedImg, setClickedImg] = useState(null);
  	const [currentIndex, setCurrentIndex] = useState(null);

  const handelClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

	return(
		<div className="windowLife">
			{/* <img src={require('./picturesImg/photos/1.jpg')} alt="HELLO" /> */}
			<div className="wrapper">
				{data.data.map((item, index) => (
					<div key={index} className="wrapper-images">
						<img src={require(`./picturesImg/photos-min/${item.link}`)} alt={item.text} onClick={() => handelClick(item, index)}/>
						<h2>{item.text}</h2>
					</div>
					
				
				))}
				{clickedImg && <Modal 
					clickedImg={clickedImg} 
					handelRotationRight={handelRotationRight}
					setClickedImg={setClickedImg}
					handelRotationLeft={handelRotationLeft}
					/>}
			</div>
		</div>
	)
}


// function Pictures (){

// let small = './picturesImg/photos-min/'; 
// let big = './picturesImg/photos'; 

// return (
//     <div className="windowLife">
//         <section>

// <div title="HUTA KATOWICE STYCZEŃ 2023">
//       <a class="example-image-link" href={Logo1W} data-lightbox="example-1">
// 	  <img className={classes.exampleImage} src={Logo1} alt="HUTA KATOWICE STYCZEŃ 2023" width="200" height="200"/></a>
	  
// 	  <a class="example-image-link" href={Logo2W} data-lightbox="example-1">
// 	  <img className={classes.exampleImage} src={Logo2} alt="HUTA KATOWICE STYCZEŃ 2023" width="200" height="200"/></a>
	  
//     </div>
	

// <div title="SUN">
//       <a class="example-image-link" href={Logo3W} data-lightbox="example-1">
// 	  <img class={classes.exampleImage} src={Logo3} alt="ZIMOWE SŁOŃCE" width="200" height="200"/></a>
	  
// 	  <a class="example-image-link" href={Logo4W} data-lightbox="example-1">
// 	  <img class={classes.exampleImage} src={Logo4} alt="ZIMOWE SŁOŃCE" width="200" height="200"/></a>
	  
// 	  <a class="example-image-link" href={Logo5W} data-lightbox="example-1">
// 	  <img class={classes.exampleImage} src={Logo5} alt="ZIMOWE SŁOŃCE" width="200" height="200"/></a>
	  
//     </div>
	
	
// <div title="SUN">
//       <a class="example-image-link" href="./img/photos/ab1.jpg" data-lightbox="example-1">
// 	  <img class="example-image" src="./img/photos-min/ab1.jpg" alt="HUTA KATOWICE" width="200" height="200"/></a>
      
// 	  <a class="example-image-link" href="./img/photos/ab2.jpg" data-lightbox="example-1">
// 	  <img class="example-image" src="./img/photos-min/ab2.jpg" alt="HUTA KATOWICE" width="200" height="200"/></a>
	  
// 	   <a class="example-image-link" href="./img/photos/A1.jpg" data-lightbox="example-1">
// 	  <img class="example-image" src="./img/photos-min/A1.jpg" alt="HUTA KATOWICE" width="200" height="200"/></a>
	  
//     </div>
	
	
// <hr /><hr />


//      <div title="HUTA KATOWICE">
//       <a class="example-image-link" href="./img/photos/zz1.jpg" data-lightbox="example-1">
// 	  <img class="example-image" src="./img/photos-min/zz1.jpg" alt="HUTA KATOWICE" width="200" height="200"/></a>
//       <a class="example-image-link" href="./img/photos/zz2.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/zz2.jpg" alt="HUTA KATOWICE" width="200" height="200"/></a>
// 	   <a class="example-image-link" href="./img/photos/zz3.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/zz3.jpg" alt="HUTA KATOWICE" width="200" height="200"/></a> 
	  
// 	  <a class="example-image-link" href="./img/photos/zz4.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/zz4.jpg" alt="HUTA KATOWICE" width="200" height="200"/></a>
	  
// 	  <a class="example-image-link" href="./img/photos/zz5.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/zz5.jpg" alt="HUTA KATOWICE" width="200" height="200"/></a>
//     </div>
	
	
	
// 	<hr /><hr />
	
	
	
//     <div>
//       <a class="example-image-link" href="./img/photos/1.jpg" data-lightbox="example-1">
// 	  <img class="example-image" src="./img/photos-min/1.jpg" alt="image-1" width="200" height="200"/></a>
//       <a class="example-image-link" href="./img/photos/2.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/2.jpg" alt="image-1" width="200" height="200"/></a>
// 	   <a class="example-image-link" href="./img/photos/3.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/3.jpg" alt="image-1" width="200" height="200"/></a>
//     </div>

 
//     <div>
//         <a class="example-image-link" href="./img/photos/4.jpg" data-lightbox="example-1">
// 	  <img class="example-image" src="./img/photos-min/4.jpg" alt="image-1" width="200" height="200"/></a>
//       <a class="example-image-link" href="./img/photos/5.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/5.jpg" alt="image-1" width="200" height="200"/></a>
// 	   <a class="example-image-link" href="./img/photos/6.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/6.jpg" alt="image-1" width="200" height="200"/></a>
//     </div>
	

//     <div>
//         <a class="example-image-link" href="./img/photos/7.jpg" data-lightbox="example-1">
// 	  <img class="example-image" src="./img/photos-min/7.jpg" alt="image-1" width="200" height="200"/></a>
//       <a class="example-image-link" href="./img/photos/8.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/8.jpg" alt="image-1" width="200" height="200"/></a>
// 	   <a class="example-image-link" href="./img/photos/9.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/9.jpg" alt="image-1" width="200" height="200"/></a>
//     </div>
	
	
//     <div>
//         <a class="example-image-link" href="./img/photos/10.jpg" data-lightbox="example-1">
// 	  <img class="example-image" src="./img/photos-min/10.jpg" alt="image-1" width="200" height="200"/></a>
//       <a class="example-image-link" href="./img/photos/11.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/11.jpg" alt="image-1" width="200" height="200"/></a>
// 	   <a class="example-image-link" href="./img/photos/12.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/12.jpg" alt="image-1" width="200" height="200"/></a>
//     </div>
	
// 	  <div>
//         <a class="example-image-link" href="./img/photos/13.jpg" data-lightbox="example-1">
// 	  <img class="example-image" src="./img/photos-min/13.jpg" alt="image-1" width="200" height="200"/></a>
//       <a class="example-image-link" href="./img/photos/14.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/14.jpg" alt="image-1" width="200" height="200"/></a>
// 	   <a class="example-image-link" href="./img/photos/15.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/15.jpg" alt="image-1" width="200" height="200"/></a>
//     </div>
	
// 	<div>
//         <a class="example-image-link" href="./img/photos/16.jpg" data-lightbox="example-1">
// 	  <img class="example-image" src="./img/photos-min/16.jpg" alt="image-1" width="200" height="200"/></a>
//       <a class="example-image-link" href="./img/photos/17.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/17.jpg" alt="image-1" width="200" height="200"/></a>
// 	   <a class="example-image-link" href="./img/photos/18.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/18.jpg" alt="image-1" width="200" height="200"/></a>
//     </div>
	
// 	<div>
//         <a class="example-image-link" href="./img/photos/19.jpg" data-lightbox="example-1">
// 	  <img class="example-image" src="./img/photos-min/19.jpg" alt="image-1" width="200" height="200"/></a>
//       <a class="example-image-link" href="./img/photos/20.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/20.jpg" alt="image-1" width="200" height="200"/></a>
// 	   <a class="example-image-link" href="./img/photos/21.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/21.jpg" alt="image-1" width="200" height="200"/></a>
//     </div>
	
// 	<div>
//         <a class="example-image-link" href="./img/photos/22.jpg" data-lightbox="example-1">
// 	  <img class="example-image" src="./img/photos-min/22.jpg" alt="image-1" width="200" height="200"/></a>
//       <a class="example-image-link" href="./img/photos/23.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/23.jpg" alt="image-1" width="200" height="200"/></a>
// 	   <a class="example-image-link" href="./img/photos/24.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/24.jpg" alt="image-1" width="200" height="200"/></a>
//     </div>

// <div>
//         <a class="example-image-link" href="./img/photos/CCC.jpg" data-lightbox="example-1">
// 	  <img class="example-image" src="./img/photos-min/CCC.jpg" alt="image-1" width="200" height="200"/></a>
//       <a class="example-image-link" href="./img/photos/CCCC.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/CCCC.jpg" alt="image-1" width="200" height="200"/></a>
// 	   <a class="example-image-link" href="./img/photos/ss.jpg" data-lightbox="example-1" >
// 	  <img class="example-image" src="./img/photos-min/sss.jpg" alt="image-1" width="200" height="200"/></a>
//     </div>
	
//   </section>
//     </div>
// )
// }


export default Pictures;