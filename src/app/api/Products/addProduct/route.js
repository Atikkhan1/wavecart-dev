import React from 'react'
import Product from "@/app/api/schema/productSchema";
const mongoose = require('mongoose');
const puppeteer = require('puppeteer');

export async function POST(req) {
  let param = await req.json()
  let reqdata = param.data
  let targetLink = reqdata.link;
  let targetCategory = reqdata.category;
  let targetSubCategory = reqdata.subcategory;
  let targetmargin = reqdata.margin
  let res;
  let auto = async () => {

    const browser = await puppeteer.launch({headless:false});

    const page = await browser.newPage();
    await page.goto(targetLink);

    let data = await page.evaluate(() => {
      let name =
        document.getElementsByClassName("sc-eDvSVe fhfLdV")[0].innerText;
      let priceGet =
        document.getElementsByClassName("sc-eDvSVe biMVPh")[0].innerText;
      let price = Number(priceGet.replace("₹", ""));

      let link = document.baseURI;
      let image = document.getElementsByClassName(
        "ProductDesktopImage__ImageWrapperDesktop-sc-8sgxcr-0 iEMJCd"
      )[0].childNodes[0].src;

      let descQuery = document.getElementsByClassName(
        "sc-eDvSVe guezwa pre pre"
      );
      let desc = "";
      for (let i = 0; i < descQuery.length; i++) {
        desc = desc + descQuery[i].innerHTML;
        
      }

      return { name, price, link, image, desc };
    });
    data.category = targetCategory;
    data.subcategory = targetSubCategory;
    data.margin = targetmargin
    await mongoose.connect(process.env.MONGO_URI)
    
    const pr = await Product.exists({link:targetLink})
    if (pr == null) {
      // console.log("save")
      res = "successfully added to db";
      await Product.create({
          name:data.name,
          image:data.image,
          price:data.price,
          description:data.desc,
          link:data.link,
          category:data.category,
          subcategory:data.subcategory,
          margin:data.margin
      })
    }else{
      res = "not added to db , product already exists";
      // console.log("not save")
    }
    await browser.close();
  };

  
  await auto();
  
  return new Response(JSON.stringify(res))
}
