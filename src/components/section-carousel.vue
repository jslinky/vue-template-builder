<template>
  <transition name="section-trans">
    <div>
      <header class="c-header-group">
        <CustomHeader bg center aligned>Carousel</CustomHeader>
      </header>

      <section class="o-section u-center u-max-width-11c u-mx-auto">
        <h2 class="o-header o-header--h5 o-header--underline">Carousels</h2>
        <div>
          <p class="u-center u-pb3">
            Standard carousel without figcaption. No class <span class="u-color-primaryColor u-font-family-monospace u-color-primaryColor">container</span> container.
          </p>
          <ol class="u-font-size-sm u-mx-auto u-max-width-6c u-mb4" style="list-style: none;">
            <li class="u-color-primaryColor u-font-family-monospace u-color-primaryColor"><span class="inline u-circle u-bg-color-primaryColor inverted o-icon o-icon--sm u-center u-font-family-primary u-mr2 u-size-absolutetiny"></span>data-itemsInView="134"</li>
          </ol>
        </div>
        <div class="c-carousel u-mt3" data-itemsInView="134">
          <div class="c-carousel__btn left aligned inset disabled" @click="prev(0)">
            <div class="o-btn o-btn--basic o-btn--icon">
              <svg class="o-btn__icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chevronLeftLight"></use>
              </svg>
            </div>
          </div>
          <div class="c-carousel__btn right aligned inset" @click="next(0)">
            <div class="o-btn o-btn--basic o-btn--icon">
              <svg class="o-btn__icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chevronRightLight"></use>
              </svg>
            </div>
          </div>
          <div class="c-carousel__inner-container">
            <div class="c-carousel__inner" style="left: 0px;">
              <article class="c-carousel__item o-item u-p2">
                  <figure class="o-item__image" ><img alt="SPORTxLIFE" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dw10a48745/2017/Features/SPORT_X_LIFE/Carousel/21372596_505866916422822_6566149592717459456_n.jpg" title="SPORTxLIFE"></figure>
              </article>

              <article class="c-carousel__item o-item u-p2">
                  <figure class="o-item__image" ><img alt="SPORTxLIFE" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dw10a48745/2017/Features/SPORT_X_LIFE/Carousel/21149017_113928105941912_4338976657651007488_n.jpg" title="SPORTxLIFE"></figure>
              </article>

              <article class="c-carousel__item o-item u-p2">
                  <figure class="o-item__image" ><img alt="SPORTxLIFE" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dw10a48745/2017/Features/SPORT_X_LIFE/Carousel/21042346_356088911493940_6285858094245216256_n.jpg" title="SPORTxLIFE"></figure>
              </article>

              <article class="c-carousel__item o-item u-p2">
                  <figure class="o-item__image" ><img alt="SPORTxLIFE" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dw10a48745/2017/Features/SPORT_X_LIFE/Carousel/20987354_113590709346632_2835783634999312384_n.jpg" title="SPORTxLIFE"></figure>
              </article>

              <article class="c-carousel__item o-item u-p2">
                  <figure class="o-item__image" ><img alt="SPORTxLIFE" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dw10a48745/2017/Features/SPORT_X_LIFE/Carousel/20987162_481116298929197_431438999710597120_n.jpg" title="SPORTxLIFE"></figure>
              </article>

              <article class="c-carousel__item o-item u-p2">
                  <figure class="o-item__image" ><img alt="SPORTxLIFE" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dw10a48745/2017/Features/SPORT_X_LIFE/Carousel/20986832_1544843158870826_5783054429045391360_n.jpg" title="SPORTxLIFE"></figure>
              </article>

              <article class="c-carousel__item o-item u-p2">
                  <figure class="o-item__image" ><img alt="SPORTxLIFE" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dw10a48745/2017/Features/SPORT_X_LIFE/Carousel/21294530_115342182499164_6157649755636760576_n.jpg" title="SPORTxLIFE"></figure>
              </article>

              <article class="c-carousel__item o-item u-p2">
                  <figure class="o-item__image" ><img alt="SPORTxLIFE" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dw10a48745/2017/Features/SPORT_X_LIFE/Carousel/20688171_110563559613671_2362410984087224320_n.jpg" title="SPORTxLIFE"></figure>
              </article>

            </div>
          </div>
        </div>
      </section>  

      <section class="o-section u-center u-max-width-9c u-mx-auto">
        <div>
          <p class="u-center u-pb3">
            Carousel with 2 products - only swipes on mobile
          </p>
          <ol class="u-font-size-sm u-mx-auto u-max-width-6c u-mb4" style="list-style: none;">
          <li class="u-color-primaryColor u-font-family-monospace u-color-primaryColor"><span class="inline u-circle u-bg-color-primaryColor inverted o-icon o-icon--sm u-center u-font-family-primary u-mr2 u-size-absolutetiny"></span>data-itemsInView="122"</li>
        </ol>

        </div>
        <div class="c-carousel u-mt3" data-itemsInView="122">
          <div class="c-carousel__btn left aligned disabled mobile only" @click="prev(1)">
            <div class="o-btn o-btn--basic o-btn--icon">
              <svg class="o-btn__icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chevronLeftLight"></use>
              </svg>
            </div>
          </div>
          <div class="c-carousel__btn right aligned mobile only" @click="next(1)">
            <div class="o-btn o-btn--basic o-btn--icon">
              <svg class="o-btn__icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chevronRightLight"></use>
              </svg>
            </div>
          </div>
          <div class="c-carousel__inner-container">
            <div class="c-carousel__inner" style="left: 0px;">
              <article class="c-carousel__item o-item column-sm--10 u-p2">
                  <figure class="o-item__image" ><img alt="product" src="http://f.jackwills.com/on/demandware.static/-/Sites/default/dw8d89547d/2017/WK42/LADIES/content_three_a.jpg">
                    <figcaption class="o-item__content u-max-width-2 u-mx-auto">
                      <h2 class="o-item__header o-header o-header--h6 o-header--no-caps u-mt3 u-mb0 u-color-primaryColor">Product name</h2>
                      <p class="u-my0 u-max-width-1 u-mx-auto u-color-primaryColor">
                        &pound;60
                      </p>
                      <!-- <a href="#" class="o-btn o-btn--sm o-btn--plain"><span class="o-btn__underline">Add to basket</span></a> -->
                    </figcaption>
                  </figure>
              </article>

              <article class="c-carousel__item o-item column-sm--10 u-p2">
                  <figure class="o-item__image" ><img alt="product" src="http://f.jackwills.com/on/demandware.static/-/Sites/default/dwcac1768e/2017/WK42/LADIES/content_three_b.jpg">
                    <figcaption class="o-item__content u-max-width-2 u-mx-auto">
                      <h2 class="o-item__header o-header o-header--h6 o-header--no-caps u-mt3 u-mb0 u-color-primaryColor">Product name</h2>
                      <p class="u-my0 u-max-width-1 u-mx-auto u-color-primaryColor">
                        &pound;60
                      </p>
                      <!-- <a href="#" class="o-btn o-btn--sm o-btn--plain"><span class="o-btn__underline">Add to basket</span></a> -->
                    </figcaption>
                  </figure>
              </article>

            </div>
          </div>
        </div>
      </section>

      <section class="o-section u-center u-max-width-9c u-mx-auto">
        
        <div>
          <p class="u-center u-pb3">
            Carousel with 3 products - only swipes on mobile
          </p>
          <ol class="u-font-size-sm u-mx-auto u-max-width-6c u-mb4" style="list-style: none;">
          <li class="u-color-primaryColor u-font-family-monospace u-color-primaryColor"><span class="inline u-circle u-bg-color-primaryColor inverted o-icon o-icon--sm u-center u-font-family-primary u-mr2 u-size-absolutetiny"></span>data-itemsInView="133"</li>
          </ol>
        </div>
        <div class="c-carousel u-mt3" data-itemsInView="133">
          <div class="c-carousel__btn left aligned disabled mobile only" @click="prev(2)">
            <div class="o-btn o-btn--basic o-btn--icon">
              <svg class="o-btn__icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chevronLeftLight"></use>
              </svg>
            </div>
          </div>
          <div class="c-carousel__btn right aligned mobile only" @click="next(2)">
            <div class="o-btn o-btn--basic o-btn--icon">
              <svg class="o-btn__icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chevronRightLight"></use>
              </svg>
            </div>
          </div>
          <div class="c-carousel__inner-container">
            <div class="c-carousel__inner" style="left: 0px;">
              <article class="c-carousel__item o-item u-p2">
                  <figure class="o-item__image" ><img alt="product" src="http://f.jackwills.com/on/demandware.static/-/Sites/default/dw8d89547d/2017/WK42/LADIES/content_three_a.jpg">
                    <figcaption class="o-item__content u-max-width-4c u-mx-auto">
                      <h2 class="o-item__hdr o-hdr u-mt3 u-mb0 u-color-primaryColor">Product name</h2>
                      <p class="u-my0 u-max-width-2c u-mx-auto u-color-primaryColor">
                        &pound;60
                      </p>
                      <!-- <a href="#" class="o-btn o-btn--sm o-btn--plain"><span class="o-btn__underline">Add to basket</span></a> -->
                    </figcaption>
                  </figure>
              </article>

              <article class="c-carousel__item o-item u-p2">
                  <figure class="o-item__image" ><img alt="product" src="http://f.jackwills.com/on/demandware.static/-/Sites/default/dwcac1768e/2017/WK42/LADIES/content_three_b.jpg">
                    <figcaption class="o-item__content u-max-width-4c u-mx-auto">
                      <h2 class="o-item__hdr o-hdr u-mt3 u-mb0 u-color-primaryColor">Product name</h2>
                      <p class="u-my0 u-max-width-2c u-mx-auto u-color-primaryColor">
                        &pound;60
                      </p>
                      <!-- <a href="#" class="o-btn o-btn--sm o-btn--plain"><span class="o-btn__underline">Add to basket</span></a> -->
                    </figcaption>
                  </figure>
              </article>

              <article class="c-carousel__item o-item u-p2">
                  <figure class="o-item__image" ><img alt="product" src="http://f.jackwills.com/on/demandware.static/-/Sites/default/dw8d89547d/2017/WK42/LADIES/content_three_a.jpg">
                    <figcaption class="o-item__content u-max-width-4c u-mx-auto">
                      <h2 class="o-item__hdr o-hdr u-mt3 u-mb0 u-color-primaryColor">Product name</h2>
                      <p class="u-my0 u-max-width-2c u-mx-auto u-color-primaryColor">
                        &pound;60
                      </p>
                      <!-- <a href="#" class="o-btn o-btn--sm o-btn--plain"><span class="o-btn__underline">Add to basket</span></a> -->
                    </figcaption>
                  </figure>
              </article>

            </div>
          </div>
        </div>
      </section>

      <section class="o-section u-max-width-6c u-mx-auto u-center">
        <p class="u-center u-pb3">
          Single image carousel
        </p>
        <ol class="u-font-size-sm u-mx-auto u-max-width-6c u-mb4" style="list-style: none;">
        <li class="u-color-primaryColor u-font-family-monospace u-color-primaryColor"><span class="inline u-circle u-bg-color-primaryColor inverted o-icon o-icon--sm u-center u-font-family-primary u-mr2 u-size-absolutetiny"></span>data-itemsInView="111"</li>
      </ol>

      <div class="c-carousel" data-itemsInView="111">
        <div class="c-carousel__btn u-transform-none u-left-0 left aligned disabled u-width-auto" style="height:100%" @click="prev(3)">
          <div class="o-btn o-btn--basic o-btn--icon u-p3">
            <svg class="o-btn__icon u-size-absolutesmall">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chevronLeftLight"></use>
            </svg>
          </div>
        </div>
        <div class="c-carousel__btn u-transform-none u-right-0 right aligned u-width-auto" style="height:100%" @click="next(3)">
          <div class="o-btn o-btn--basic o-btn--icon u-p3">
            <svg class="o-btn__icon u-size-absolutesmall">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#chevronRightLight"></use>
            </svg>
          </div>
        </div>
        <div class="c-carousel__inner-container">
          <div class="c-carousel__inner">
            <article class="c-carousel__item o-item twelve wide u-ml0-sm">
              <figure class="o-item__image u-flex u-items-center u-flex-column-sm u-flex-row-reverse-md">
                <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dw95d724a6/stores/soho/content_2_carousel_1.jpg" title="" class="column--12">
              </figure>
            </article>
            <article class="c-carousel__item o-item twelve wide">
              <figure class="o-item__image u-flex u-items-center u-flex-column-sm u-flex-row-reverse-md">
                <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dw95d724a6/stores/soho/content_2_carousel_2.jpg" title="" class="column--12">
              </figure>
            </article>
            <article class="c-carousel__item o-item twelve wide">
              <figure class="o-item__image u-flex u-items-center u-flex-column-sm u-flex-row-reverse-md">
                <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dw95d724a6/stores/soho/content_2_carousel_3.jpg" title="" class="column--12">
              </figure>
            </article>
            <article class="c-carousel__item o-item twelve wide">
              <figure class="o-item__image u-flex u-items-center u-flex-column-sm u-flex-row-reverse-md">
                <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dw95d724a6/stores/soho/content_2_carousel_4.jpg" title="" class="column--12">
              </figure>
            </article>
            <article class="c-carousel__item o-item twelve wide">
              <figure class="o-item__image u-flex u-items-center u-flex-column-sm u-flex-row-reverse-md">
                <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dw95d724a6/stores/soho/content_2_carousel_5.jpg" title="" class="column--12">
              </figure>
            </article>
            <article class="c-carousel__item o-item twelve wide">
              <figure class="o-item__image u-flex u-items-center u-flex-column-sm u-flex-row-reverse-md">
                <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dw95d724a6/stores/soho/content_2_carousel_6.jpg" title="" class="column--12">
              </figure>
            </article>
          </div>
        </div>
      </div>

      </section>


      <section class="o-section u-clearfix u-max-site-width u-mx-auto u-pb0-sm">

        <p class="u-center u-pb3">
          Single image carousel with autoplay and pills
        </p>
        <ol class="u-font-size-sm u-mx-auto u-max-width-6c u-mb3" style="list-style: none;">
        <li class="u-color-primaryColor u-font-family-monospace u-color-primaryColor"><span class="inline u-circle u-bg-color-primaryColor inverted o-icon o-icon--sm u-center u-font-family-primary u-mr2 u-size-absolutetiny"></span>data-itemsInView="111"</li>
        <li class="u-color-primaryColor u-font-family-monospace u-color-primaryColor"><span class="inline u-circle u-bg-color-primaryColor inverted o-icon u-center u-font-family-primary u-mr2  u-size-absolutetiny"></span>data-autoplay="true"</li>
        <li class="u-color-primaryColor u-font-family-monospace u-color-primaryColor"><span class="inline u-circle u-bg-color-primaryColor inverted o-icon u-center u-font-family-primary u-mr2  u-size-absolutetiny"></span>data-autoplayDelay="0"</li>
        <li class="u-color-primaryColor u-font-family-monospace u-color-primaryColor"><span class="inline u-circle u-bg-color-primaryColor inverted o-icon u-center u-font-family-primary u-mr2  u-size-absolutetiny"></span>data-autoplayInterval="5000"</li>
      </ol>

        <!-- Start: Ladies Carousel -->
        <div class="c-carousel" data-autoplay="true" data-autoplayDelay="0" data-autoplayInterval="5000" data-itemsInView="111">

          <!-- Carousel Pills -->
          <div class="c-carousel__pills">
              <div class="c-carousel__pillContainer"></div>
              <div class="c-carousel__pillsImageSizer twelve wide mobile six wide tablet six wide computer">
                <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dwc19096b9/2017/Features/wool-week/image_gents_4.jpg">
              </div>
          </div>

          <div class="c-carousel__inner-container">

            <div class="c-carousel__inner u-line-height-0">
              <!-- Start: Ladies Carousel item 1 -->
              <article class="c-carousel__item twelve wide u-my0 u-ml0 u-normal-wrap u-inline-flex u-flex-column-sm u-flex-row-md">

                <div class="o-item column u-py0 twelve wide mobile six wide tablet">
                  <figure class="o-item__image">
                    <a href="/atwater-wool-trench-100012874009.html">
                      <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dwc19096b9/2017/Features/wool-week/image_ladies_1.jpg">
                    </a>
                  </figure>
                </div>

                <div class="o-item twelve wide mobile six wide tablet column u-py0">
                  <div class="c-woolWeek-itemContent c-woolWeek-itemContent--red u-items-center o-item__content u-mx-auto u-height-100 u-flex u-justify-center u-pb3-sm u-absolute u-relative-sm twelve wide">
                    <div class="twelve wide u-flex u-flex-column u-justify-center u-px1 u-max-width-4c">
                      <h2 class="o-item__hdr o-hdr o-hdr--lg u-mt0 u-mt3-sm u-mb0">ATWATER WOOL<br>TRENCH</h2>
                      <p class="u-font-family-secondary u-mt2 u-mb1 u-max-width-1 u-mx-auto">Our Atwater trench is faultlessly constructed from heathered wool, offering a layer of warmth and ensuring longevity.</p><p class="o-header u-font-family-secondary u-mt2 u-mb0 u-font-size-big">£198.00</p>
                      <div class="o-buttons u-mx0 u-self-center">
                        <a href="/atwater-wool-trench-100012874009.html" class="o-btn u-self-center">Shop Now</a>                       
                      </div>
                    </div>
                  </div>
                </div>

              </article>
              <!-- End: Ladies Carousel item 1 -->
              <!-- Start: Ladies Carousel item 2 -->
              <article class="c-carousel__item twelve wide u-my0 u-ml0 u-normal-wrap u-inline-flex u-flex-column-sm u-flex-row-md">

                <div class="o-item u-py0 twelve wide mobile six wide tablet">
                  <figure class="o-item__image">
                    <a href="/bartongate-shift-dress-100013220001.html">
                      <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dwc19096b9/2017/Features/wool-week/image_ladies_2.jpg">
                    </a>
                  </figure>
                </div>

                <div class="o-item twelve wide mobile six wide tablet column u-py0">
                  <div class="c-woolWeek-itemContent c-woolWeek-itemContent--blue u-items-center o-item__content u-mx-auto u-height-100 u-flex u-justify-center u-pb3-sm u-absolute u-relative-sm twelve wide">
                    <div class="twelve wide u-flex u-flex-column u-justify-center u-px1 u-max-width-4c">
                      <h2 class="o-item__hdr o-hdr o-hdr--lg u-mt0 u-mt3-sm u-mb0">BARTONGATE<br>CHECK SHIFT<br>DRESS</h2>
                      <p class="u-font-family-secondary u-mt2 u-mb1 u-max-width-4c u-mx-auto">Made from a luxurious wool mix the Bartongate dress is perfect for autumnal dressing, in a unique tartan check.</p>
                      <p class="o-hdr u-font-family-secondary u-mt2 u-mb0 u-font-size-big">£89.95</p>
                      <div class="o-buttons u-mx0 u-self-center">
                        <a href="/bartongate-shift-dress-100013220001.html" class="o-btn u-self-center">
                          Shop Now
                        </a>                       
                      </div>
                    </div>
                  </div>
                </div>

              </article>
              <!-- End: Ladies Carousel item 2 -->
              <!-- Start: Ladies Carousel item 3 -->
              <article class="c-carousel__item twelve wide u-my0 u-ml0 u-normal-wrap u-inline-flex u-flex-column-sm u-flex-row-md">

                <div class="o-item column u-py0 twelve wide mobile six wide tablet">
                  <figure class="o-item__image">
                    <a href="/langholm-cardigan-stitch-jumper-100012861002.html">
                      <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dwc19096b9/2017/Features/wool-week/image_ladies_3.jpg">
                    </a>
                  </figure>
                </div>

                <div class="o-item twelve wide mobile six wide tablet column u-py0">
                  <div class="c-woolWeek-itemContent c-woolWeek-itemContent--red u-items-center o-item__content u-mx-auto u-height-100 u-flex u-justify-center u-pb3-sm u-absolute u-relative-sm twelve wide">
                    <div class="twelve wide u-flex u-flex-column u-justify-center u-px1 u-max-width-4c">
                      <h2 class="o-item__hdr o-hdr o-dr--lg u-mt0 u-mt3-sm u-mb0">LANGHOLM<br>JUMPER</h2>
                      <p class="u-font-family-secondary u-mt2 u-mb1 u-max-width-3c u-mx-auto">The Langholm jumper has been carefully constructed from a cotton and alpaca blend to ensure it's easy to transition through the seasons.</p>
                      <p class="o-dr u-font-family-secondary u-mt2 u-mb0 u-font-size-big">£64.95</p>
                      <div class="o-buttons u-mx0 u-self-center">
                        <a href="/langholm-cardigan-stitch-jumper-100012861002.html" class="o-btn u-self-center">
                          Shop Now
                        </a>                       
                      </div>
                    </div>
                  </div>
                </div>

              </article>
              <!-- End: Ladies Carousel item 3 -->
            </div>

          </div>

        </div>
        <!-- End: Ladies Carousel -->


        <div class="o-divider u-mx-auto u-max-width-6c u-mt1-sm"></div>

        <p class="u-center u-pb3">
          Single image carousel with autoplay, autoplay delay and pills
        </p>
        <ol class="u-font-size-sm u-mx-auto u-max-width-6c u-mb3" style="list-style: none;">
          <li class="u-color-primaryColor u-font-family-monospace u-color-primaryColor"><span class="inline u-circle u-bg-color-primaryColor inverted o-icon o-icon--sm u-center u-font-family-primary u-mr2 u-size-absolutetiny"></span>data-itemsInView="111"</li>
          <li class="u-color-primaryColor u-font-family-monospace u-color-primaryColor"><span class="inline u-circle u-bg-color-primaryColor inverted o-icon u-center u-font-family-primary u-mr2  u-size-absolutetiny"></span>data-autoplay="true"</li>
          <li class="u-color-primaryColor u-font-family-monospace u-color-primaryColor"><span class="inline u-circle u-bg-color-primaryColor inverted o-icon u-center u-font-family-primary u-mr2  u-size-absolutetiny"></span>data-autoplayDelay="3000"</li>
          <li class="u-color-primaryColor u-font-family-monospace u-color-primaryColor"><span class="inline u-circle u-bg-color-primaryColor inverted o-icon u-center u-font-family-primary u-mr2  u-size-absolutetiny"></span>data-autoplayInterval="5000"</li>
        </ol>

        <!-- Start: Gents Carousel -->
        <div class="c-carousel" data-itemsInView="111" data-autoplay="true" data-autoplayDelay="3000" data-autoplayInterval="5000">

          <!-- Carousel Pills -->
          <div class="c-carousel__pills">
            <div class="c-carousel__pillContainer"></div>
            <div class="c-carousel__pillsImageSizer twelve wide mobile six wide tablet">
              <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dwc19096b9/2017/Features/wool-week/image_gents_4.jpg">
            </div>
          </div>

          <div class="c-carousel__inner-container">

            <div class="c-carousel__inner">
              <!-- Start: Gents Carousel item 1 -->
              <article class="c-carousel__item twelve wide u-my0 u-ml0 u-normal-wrap u-flex-row-reverse-md u-flex-column-sm u-inline-flex">

                <div class="o-item column u-py0 twelve wide mobile six wide tablet">
                  <figure class="o-item__image">
                    <a href="/knutsford-crew-neck-jumper-100012989001.html">
                      <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dwc19096b9/2017/Features/wool-week/image_gents_4.jpg">
                    </a>
                  </figure>
                </div>

                <div class="o-item column u-py0 twelve wide mobile six wide tablet">
                  <div class="c-woolWeek-itemContent c-woolWeek-itemContent--red u-items-center o-item__content u-mx-auto u-height-100 u-relative-sm u-absolute twelve wide u-flex u-justify-center">
                    <div class="twelve wide u-flex u-flex-column u-justify-center u-px1 u-max-width-4c u-pb3-sm">
                      <h2 class="o-item__hdr o-hdr o-hdr--lg u-mt0 u-mt3-sm u-mb0">BROWNSON<br>WOOL PEACOAT</h2>
                      <p class="u-font-family-secondary u-mt2 u-mb1 u-max-width-4c u-mx-auto">Constructed from durable wool, the Brownson peacoat is an outerwear essential for every gent; plus its Sherpa-lined collar ensures warmth.</p>
                      <p class="o-hdr u-font-family-secondary u-mt2 u-mb0 u-font-size-big">£199.00</p>
                      <div class="o-buttons u-mx0 u-self-center">
                        <a href="/brownson-wool-peacoat-100013234001.html" class="o-btn u-self-center">
                        Shop Now
                        </a>                       
                      </div>
                    </div>
                  </div>
                </div>

              </article>
              <!-- End: Gents Carousel item 1 -->
              <!-- Start: Gents Carousel item 2 -->
              <article class="c-carousel__item twelve wide u-my0 u-ml0 u-normal-wrap u-flex-row-reverse-md u-flex-column-sm u-inline-flex">

                <div class="o-item column u-py0 twelve wide mobile six wide tablet">
                  <figure class="o-item__image">
                    <a href="/brownson-wool-peacoat-100013234001.html">
                      <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dwc19096b9/2017/Features/wool-week/image_gents_5.jpg">
                    </a>
                  </figure>
                </div>

                <div class="o-item column u-py0 twelve wide mobile six wide tablet">
                  <div class="c-woolWeek-itemContent c-woolWeek-itemContent--blue u-items-center o-item__content u-mx-auto u-absolute u-relative-sm twelve wide u-height-100 u-flex u-justify-center">
                    <div class="twelve wide u-flex u-flex-column u-justify-center u-px1 u-max-width-4c u-pb3-sm">
                      <h2 class="o-item__hdr o-hdr o-hdr--lg u-mt0 u-mt3-sm u-mb0">KNUTSFORD<br>CREW NECK<br>JUMPER</h2>
                      <p class="u-font-family-secondary u-mt2 u-mb1 u-max-width-4c u-mx-auto">Made from a two-tone twisted yarn made up of the finest Merino wool, the Knutsford is a classic crew and essential for autumn.</p>
                      <p class="o-header u-font-family-secondary u-mt2 u-mb0 u-font-size-big">£74.95</p>
                      <div class="o-buttons u-mx0 u-self-center">
                        <a href="/knutsford-crew-neck-jumper-100012989001.html" class="o-btn u-self-center">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </article>
              <!-- End: Gents Carousel item 2 -->
              <!-- Start: Gents Carousel item 3 -->
              <article class="c-carousel__item twelve wide u-my0 u-ml0 u-normal-wrap u-flex-row-reverse-md u-flex-column-sm u-inline-flex">

                <div class="o-item column u-py0 twelve wide mobile six wide tablet">
                  <figure class="o-item__image">
                    <a href="/bloomsbury-tweed-suit-jacket-100010814008.html">
                      <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dwc19096b9/2017/Features/wool-week/image_gents_6.jpg">
                    </a>
                  </figure>
                </div>

                <div class="o-item column u-py0 twelve wide mobile six wide tablet">
                  <div class="c-woolWeek-itemContent c-woolWeek-itemContent--red u-items-center o-item__content u-mx-auto u-absolute u-relative-sm twelve wide u-height-100 u-flex u-justify-center">
                    <div class="twelve wide u-flex u-flex-column u-justify-center u-px1 u-max-width-2 u-pb3-sm">
                      <h2 class="o-item__hdr o-hdr o-hdr--lg u-mt0 u-mt3-sm u-mb0">BLOOMSBURY<br>SUIT JACKET</h2>
                      <p class="u-font-family-secondary u-mt2 u-mb1 u-max-width-4c u-mx-auto">Constructed from fabric made for us by Abraham Moon & Sons in West Yorkshire the Bloomsbury suit is the ultimate in dapper dressing.</p>
                      <p class="o-header u-font-family-secondary u-mt2 u-mb0 u-font-size-big">£249.00</p>
                      <div class="o-buttons u-mx0 u-self-center">
                        <a href="/bloomsbury-tweed-suit-jacket-100010814008.html" class="o-btn u-self-center"><span class="o-btn__underline">Shop Now</span></a>
                      </div>
                    </div>
                  </div>
                </div>

              </article>
              <!-- End: Gents Carousel item 3 -->
            </div>

          </div>

        </div>
        <!-- End: Gents Carousel -->

      </section>    

    
      <section class="o-section u-max-width-4 u-mx-auto column-sm--10" id="content-shopby">

        <p class="u-center u-pb3">
          Single image carousel with autoplay, pills and associated buttons
        </p>
        <ol class="u-font-size-sm u-mx-auto u-max-width-6c u-mb4" style="list-style: none;">
          <li class="u-color-primaryColor u-font-family-monospace u-color-primaryColor"><span class="inline u-circle u-bg-color-primaryColor inverted o-icon o-icon--sm u-center u-font-family-primary u-mr2 u-size-absolutetiny"></span>data-itemsInView="111"</li>
          <li class="u-color-primaryColor u-font-family-monospace u-color-primaryColor"><span class="inline u-circle u-bg-color-primaryColor inverted o-icon u-center u-font-family-primary u-mr2  u-size-absolutetiny"></span>data-autoplay="true"</li>
          <li class="u-color-primaryColor u-font-family-monospace u-color-primaryColor"><span class="inline u-circle u-bg-color-primaryColor inverted o-icon u-center u-font-family-primary u-mr2  u-size-absolutetiny"></span>data-autoplayDelay="0"</li>
          <li class="u-color-primaryColor u-font-family-monospace u-color-primaryColor"><span class="inline u-circle u-bg-color-primaryColor inverted o-icon u-center u-font-family-primary u-mr2  u-size-absolutetiny"></span>data-autoplayInterval="5000"</li>
        </ol>


          <div class="middle aligned u-flex o-container u-flex-column-sm u-flex-row-md">

              <div class="o-item twelve wide mobile seven wide tablet seven wide computer column u-py2 u-px4 u-px2-sm u-px2-md">
                <div class="c-carousel" data-autoplay="true" data-autoplayDelay="0" data-autoplayInterval="5000" data-itemsInView="111">

                  <!-- Carousel Pills -->
                  <div class="c-carousel__pills c-carousel__pills--sm">
                      <div class="c-carousel__pillContainer"></div>
                      <div class="c-carousel__pillsImageSizer twelve wide">
                        <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dwdd1f6eef/2017/Features/WK40_CHRISTMAS/02_GIFT_GUIDE/JACK_WILLS_CHRISTMAS_partying_partywear_dresses.jpg">
                      </div>
                  </div>

                  <div class="c-carousel__inner-container">

                    <div class="c-carousel__inner u-line-height-0">

                      <article class="c-carousel__item o-item twelve wide u-ml0">
                        <div class="o-item u-py0">
                          <figure class="o-item__image">
                            <a href="/christmas/gift-guide/shop-by-interest/partying-hard/">
                              <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dwdd1f6eef/2017/Features/WK40_CHRISTMAS/02_GIFT_GUIDE/JACK_WILLS_CHRISTMAS_partying_partywear_dresses.jpg">
                            </a>
                          </figure>
                        </div>
                      </article>

                      <article class="c-carousel__item o-item twelve wide">
                        <div class="o-item u-py0">
                          <figure class="o-item__image">
                            <a href="/christmas/gift-guide/shop-by-interest/gym-brunch/">
                              <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dwdd1f6eef/2017/Features/WK40_CHRISTMAS/02_GIFT_GUIDE/JACK_WILLS_CHRISTMAS_gifts_Gym_fitness.jpg">
                            </a>
                          </figure>
                        </div>
                      </article>

                      <article class="c-carousel__item o-item twelve wide">
                        <div class="o-item u-py0">
                          <figure class="o-item__image">
                            <a href="/christmas/gift-guide/shop-by-interest/boxset-lie-down/">
                              <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dwdd1f6eef/2017/Features/WK40_CHRISTMAS/02_GIFT_GUIDE/JACK_WILLS_CHRISTMAS_loungwear_hoodies.jpg">
                            </a>
                          </figure>
                        </div>
                      </article>

                      <article class="c-carousel__item o-item twelve wide">
                        <div class="o-item u-py0">
                          <figure class="o-item__image">
                            <a href="/christmas/gift-guide/shop-by-interest/that-festive-cheer/">
                              <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dwdd1f6eef/2017/Features/WK40_CHRISTMAS/02_GIFT_GUIDE/JACK_WILLS_CHRISTMAS_festive_underwear.jpg">
                            </a>
                          </figure>
                        </div>
                      </article>

                      <article class="c-carousel__item o-item twelve wide">
                        <div class="o-item u-py0">
                          <figure class="o-item__image">
                            <a href="/christmas/gift-guide/shop-by-interest/all-things-jack-wills/">
                              <img alt="Shop Ladies" src="http://www.jackwills.com/on/demandware.static/-/Sites/default/dwdd1f6eef/2017/Features/WK40_CHRISTMAS/02_GIFT_GUIDE/JACK_WILLS_CHRISTMAS_jack_wills_brand.jpg">
                            </a>
                          </figure>
                        </div>
                      </article>


                    </div>

                  </div>

                </div>

              </div>
              <div class="eleven wide mobile five wide tablet five wide computer column centered u-flex u-flex-column u-items-center u-justify-center u-mx-auto">
                  <h1 class="o-hdr o-hdr--md u-mt3 u-mt0-sm u-center u-color-primaryColor">Shop By Interest</h1>
                  <p class="u-font-family-secondary u-mt2 u-mb1 u-max-width-2 u-mx-auto u-color-primaryColor u-center">We’ve gathered together edits based on what they love! After all, you know them better than we do.
                  </p>
                  <div id="c-carousel-linkedButtons-6" class="o-buttons o-buttons--stacked o-buttons--stacked-md u-mx0 u-mt3 nine wide tablet u-mx-auto twelve wide mobile">
                  <a href="/christmas/gift-guide/shop-by-interest/partying-hard/" class="o-btn o-btn--primary inverted o-btn--xmas o-btn--defaultColorState">PARTYING HARD</a>
                      <a href="/christmas/gift-guide/shop-by-interest/gym-brunch/" class="o-btn o-btn--primary inverted o-btn--xmas o-btn--defaultColorState">THE GYM, THEN BRUNCH</a>
                  <a href="/christmas/gift-guide/shop-by-interest/boxset-lie-down/" class="o-btn o-btn--primary inverted o-btn--xmas o-btn--defaultColorState">A BOXSET AND A LIE DOWN</a>
                  <a href="/christmas/gift-guide/shop-by-interest/that-festive-cheer/" class="o-btn o-btn--primary inverted o-btn--xmas o-btn--defaultColorState">THAT FESTIVE CHEER</a>
                  <a href="/christmas/gift-guide/shop-by-interest/all-things-jack-wills/" class="o-btn o-btn--primary inverted o-btn--xmas o-btn--defaultColorState">ALL THINGS JACK WILLS</a>
                  </div>
              </div>

          </div>
      </section>

    </div>
  </transition>
</template>

<script>

import CustomHeader from './heading'


export default {
  name: 'sectionCarousel',
  components: {
    CustomHeader
  },
  data() {
    return {
      carousel: ''
    }
  },
  methods: {
  prev(i) {
    c_carousel.main.prev(i)
  },
  next(i) {
      c_carousel.main.next(i)
    }
  },
  activated() {
    window.scrollTo(0, 0)
  },
  mounted() {
    c_carousel.main.init()
    var testButton = c_carousel.main.createLinkedBtns(6);
    c_carousel_linkedButtons.main.clickEventButtons(testButton);
  }  
}

var c_carousel = c_carousel || {};

c_carousel.main = {

  carousel_inner: document.getElementsByClassName('c-carousel__inner'),
  carousel_item: document.getElementsByClassName('c-carousel__item'),
  carousel_item_width: 0,
  carousel: [],
  linkedButtons: [],
  itemsInView: 0,
  itemsMoved: 0,
  autoPlayDelay: 2000,
  autoPlayInterval: 2000,
  mobileItemsInView: 1,
  tabletItemsInView: 3,
  computerItemsInView: 4,
  windowWidth: window.innerWidth,
  init: function () {
    this.initCarousels();
    this.initPills();
    this.initAutoPlay();
    this.initiateTouchEvents();
    this.sizeCheck();

    window.addEventListener('resize', function () {      
      var newWindowWidth = window.innerWidth;
      if (newWindowWidth != c_carousel.main.windowWidth) {
        c_carousel.main.sizeCheck();
      }
    });
  },

  initCarousels: function (i, itemsInView) {
    this.carousel = [];

    for (var i = 0; i < this.carousel_inner.length; i++) {

      //force inline pixel
      this.carousel_inner[i].style.left = "0px";

      var innerItems = this.carousel_inner[i].getElementsByClassName('c-carousel__item'),
        maxWidth = ((innerItems.length - c_carousel.main.itemsInView) * innerItems[0].clientWidth);


      // Check for pills
      // Get c-carousel instance
      var getCarousel = this.carousel_inner[i].parentNode.parentNode.classList.contains("c-carousel"),
        // set selection || false
        carouselParent = getCarousel ? this.carousel_inner[i].parentNode.parentNode : false,
        // check for pills container within instance
        hasPills = carouselParent.querySelector(".c-carousel__pills");
      // Check for autoplay data attribute
      var isAutoPlay = carouselParent.hasAttribute("data-autoplay"),
        autoPlayDelay,
        autoPlayInterval,
        autoPlay = [];

      if (carouselParent.hasAttribute("data-autoplayDelay")) {
        autoPlayDelay = carouselParent.dataset.autoplaydelay;
      } else {
        autoPlayDelay = this.autoPlayDelay;
      }
      if (carouselParent.hasAttribute("data-autoplayInterval")) {
        autoPlayInterval = carouselParent.dataset.autoplayinterval;
      } else {
        autoPlayInterval = this.autoPlayInterval;
      }
      autoPlay.push(isAutoPlay, autoPlayDelay, autoPlayInterval);

      // check for itemsInView
      var hasItemsInView = carouselParent.hasAttribute("data-itemsInView"),
        getItemsInView,
        mobileItemsInView,
        tabletItemsInView,
        computerItemsInView,
        itemsInView = [];

      if (hasItemsInView) {
        getItemsInView = carouselParent.dataset.itemsinview;
        mobileItemsInView = parseInt(getItemsInView.charAt(0));
        tabletItemsInView = parseInt(getItemsInView.charAt(1));
        computerItemsInView = parseInt(getItemsInView.charAt(2));
      } else {
        mobileItemsInView = this.mobileItemsInView;
        tabletItemsInView = this.tabletItemsInView;
        computerItemsInView = this.computerItemsInView;
      }
      // hasItemsInView = boolean val | mobile | tablet | desktop | current value to re-assign
      itemsInView.push(hasItemsInView, mobileItemsInView, tabletItemsInView, computerItemsInView, this.itemsInView);

      //[carousel, length of items, itemsMoved, carousel_item_width, maxWidth, hasPills, autoPlay, itemsInView, linkedButtons]
      this.carousel.push([this.carousel_inner[i], innerItems.length, 0, innerItems[0].clientWidth, maxWidth, hasPills, autoPlay, itemsInView, this.linkedButtons]);

    }

  },

  resizeProcess: function (i, itemsInView) {    
    var itemsMoved = 0,
      itemsInView = itemsInView,
      carouselItem = this.carousel_inner[i].getElementsByClassName('c-carousel__item'),
      carouselItemWidth = carouselItem[0].clientWidth,
      maxWidth = ((this.carousel[i][1] - itemsInView) * carouselItemWidth);

    this.carousel[i][2] = itemsMoved;
    this.carousel[i][3] = carouselItemWidth;
    this.carousel[i][4] = maxWidth;
    this.carousel[i][7][4] = itemsInView;
  },

  initAutoPlay: function () {
    for (var i = 0; i < this.carousel_inner.length; i++) {
      var currentCar = this.carousel[i];
      // if isAutoPlay is true...
      if (this.carousel[i][6][0] == true) {
        var delay = parseInt(currentCar[6][1]),
          interval = parseInt(currentCar[6][2]);
        this.autoPlay([i, delay, interval]);
      }
    }
  },

  autoPlay: function (carousel) {
    var carousel = carousel;
    if (this.carousel[carousel[0]][6][0] == true) {
      var _carousel = carousel;
      var interval,
        timeout;
      function setTheInterval(_carousel) {
        var __carousel = _carousel;
        interval = setInterval(function () {
          c_carousel.main.next(__carousel[0]);
        }, _carousel[2]);

        // send interval to autoPlay array
        c_carousel.main.carousel[__carousel[0]][6].push(interval);
        // console.log(c_carousel.main.carousel[carousel[0]][6]);

      }

      setTimeout(function (_carousel) {
        setTheInterval(carousel);
      }, _carousel[1]);


    } else {
      var selection = c_carousel.main.carousel[carousel[0]];
      // console.log(interval);
      interval = clearInterval(selection[6][3]);
    }
  },


  killCarousel: function (i) {
    var carousel = c_carousel.main.carousel[i];
    carousel[6][0] = false;
    this.autoPlay([i, carousel[6][1], carousel[6][2]]);
  },

  initPills: function () {

    for (var i = 0; i < this.carousel_inner.length; i++) {
      // if pills exist...
      if (this.carousel[i][5] != null) {
        // loop through length of items
        for (var j = 0; j < this.carousel[i][1]; j++) {
          // create pill div
          var pill = document.createElement('div');
          // set class
          pill.setAttribute("class", "c-carousel__pill");
          // get pills container - c-carousel__pillContainer
          var selection = this.carousel[i][5].children[0];
          // Append child to pills container
          selection.appendChild(pill);
        }
        // Get first pill in each instance and add is-active class
        var firstPill = this.carousel[i][5].querySelector('.c-carousel__pill');
        firstPill.classList.add("is-active");
      }
    }
    // Go through eacj carousel instance pills and attacj click event
    this.pillsAttachClickEvent();
  },

  pillsAttachClickEvent: function () {
    for (var i = 0; i < this.carousel_inner.length; i++) {
      // if pills exist...
      if (this.carousel[i][5] != null) {
        var pill = this.carousel[i][5].querySelectorAll('.c-carousel__pill');
        for (var j = 0; j < this.carousel[i][1]; j++) {
          var pillI = pill[j];
          this.pillsClickEvent(pillI, i, j, "click", pill);
        }
      }
    }
  },

  pillsClickEvent: function (btnInstance, i, j, eventName, obj) {
    // Event Name
    var eventName = eventName.toString();
    // posX is width of item
    var posX = this.carousel[i][3],
      // get reference to instance of carousel array
      carouselI = this.carousel[i];
    // Value used to define left px value for items. calculated by multiplying index (j)
    posX = -(posX * j);
    btnInstance.addEventListener(eventName, function (e) {
      e.preventDefault();
      // console.log(posX);
      c_carousel.main.killCarousel(i); // create a function that tests for auto play and apply if data-autoplay is true
      // Set left px value of carousel inner
      carouselI[0].style.left = posX + "px";

      if (obj.hasOwnProperty('buttons') == false) {
        // console.log("no buttons key");
        this.pillSetActive(e, carouselI);
      } else {
        var activeButtonIndex = Array.from(obj.buttons).indexOf(event.target);
        carouselI[2] = activeButtonIndex;
        // console.log(obj);
        this.pillSetActive(e, carouselI, carouselI[2], obj);
        // console.log("Has buttons");
      }
    }.bind(this));
  },

  pillSetActive: function (e, obj, index, linkedButtons) {
    // get current is-active pill
    var activeDot = obj[5].querySelector('.c-carousel__pill.is-active');
    // get all the dots
    var allDots = obj[5].querySelectorAll('.c-carousel__pill');
    // Gets index value of clicked target from allDots collection
    if (index !== undefined) {
      // console.log("index passed" + index);
      var activeDotIndex = obj[2];
      activeDotIndex = index;
      obj[2] = activeDotIndex;
      // Remove is-active class from current active pill
      activeDot.classList.remove("is-active");
      // add is-active class to dot with index value passed in
      allDots[activeDotIndex].classList.add("is-active");
    } else {
      var activeDotIndex = Array.from(allDots).indexOf(event.target);
      obj[2] = activeDotIndex;
      // console.log(obj[2]);
      // Remove is-active class from current active pill
      activeDot.classList.remove("is-active");
      // add is-active class
      // if the e.target comes from a click on a pill then add class to new active pill
      if (Array.from(allDots).indexOf(event.target) !== -1) {
        e.target.classList.add("is-active");
      }
    }
    // Set active linked button
    if (obj[8].length > 0) {
      c_carousel_linkedButtons.main.setButtonActive(obj);
    }
  },

  snapAttack: function (e, i, d) {
    // console.log(e);
    if (d === "left" && e < c_carousel.main.carousel[i][4]) {
      var c_buffer = (c_carousel.main.carousel[i][3] / 2);
    } else if (d === "right" && e < 0) {
      var c_buffer = -(c_carousel.main.carousel[i][3] / 2);
    } else {
      var c_buffer = 1;
    }
    // console.log(c_buffer);
    // work out closest slide and return pixel value for it
    var closestSlide = Math.round((~e + c_buffer) / (c_carousel.main.carousel[i][3] + 0.0)) * c_carousel.main.carousel[i][3];
    c_carousel.main.carousel[i][2] = (Math.floor(closestSlide / c_carousel.main.carousel[i][3]));
    if (closestSlide > c_carousel.main.carousel[i][4]) {
      closestSlide = c_carousel.main.carousel[i][4];
    }
    // if pills exist...
    if (this.carousel[i][5] != null) {
      this.pillSetActive(e, this.carousel[i], this.carousel[i][2]);
    }
    // killCarousel(i); // create a function that tests for auto play and apply if data-autoplay is true
    return -(closestSlide) + "px";
  },

  sizeCheck: function () {
    // function to handle resize calculations for mobile (1), tablet (3) and desktop (4)
    // console.log('size check')

    for (var i = 0; i < c_carousel.main.carousel_inner.length; i++) {

      var itemsInViewArr = c_carousel.main.carousel[i][7],
        itemsInViewDataAttr = itemsInViewArr[0],
        mobileItemsInView = itemsInViewArr[1],
        tabletItemsInView = itemsInViewArr[2],
        computerItemsInView = itemsInViewArr[3],
        itemsInView = itemsInViewArr[4];

      if (window.innerWidth < 768) {
        if (itemsInViewDataAttr == true) {
          itemsInView = mobileItemsInView;
        } else {
          itemsInView = this.mobileItemsInView;
        }
        c_carousel.main.resizeProcess(i, itemsInView);
      }

      if (window.innerWidth >= 768 && window.innerWidth < 992) {
        if (itemsInViewDataAttr == true) {
          itemsInView = tabletItemsInView;
        } else {
          itemsInView = this.tabletItemsInView;
        }
        c_carousel.main.resizeProcess(i, itemsInView);
      }

      if (window.innerWidth > 992) {
        if (itemsInViewDataAttr == true) {
          itemsInView = computerItemsInView;
        } else {
          itemsInView = this.computerItemsInView;
        }
        c_carousel.main.resizeProcess(i, itemsInView);
      }

    }

    for (var i = 0; i < c_carousel.main.carousel_inner.length; i++) {
      var leftInt = parseInt(c_carousel.main.carousel_inner[i].style.left, 10);
      c_carousel.main.carousel[i][0].style.left = c_carousel.main.snapAttack(leftInt, i);
    }

    // c_carousel.main.initCarousels();

    c_carousel.main.pillsAttachClickEvent();

  },

  next: function (n) {
    var currentX = parseInt(this.carousel[n][0].style.left, 10);
    if (currentX <= -(this.carousel[n][4])) {
      // var newPosX = -(this.carousel[n][4]);
      var newPosX = 0;
      var currentX = 0;
      this.carousel[n][2] = 0;
      // if pills exist...
      if (this.carousel[n][5] != null) {
        this.pillSetActive(this, this.carousel[n], this.carousel[n][2]);
      }
    } else {
      this.carousel[n][2]++;
      // if pills exist
      if (this.carousel[n][5] != null) {
        this.pillSetActive(this, this.carousel[n], this.carousel[n][2]);
      }
      var newPosX = -(this.carousel[n][3] * this.carousel[n][2]);
    }

    this.carousel[n][0].style.left = newPosX + "px";
  },

  prev: function (n) {
    var currentX = parseInt(this.carousel[n][0].style.left, 10);

    if (currentX >= 0) {
      var newPosX = 0;
    } else {
      var newPosX = currentX + this.carousel[n][3];
      this.carousel[n][2]--;
    }

    this.carousel[n][0].style.left = newPosX + "px";

  },

  initiateTouchEvents: function () {
    for (var i = 0; i < this.carousel_inner.length; i++) {

      (function (index) {
        c_carousel.main.carousel[i][0].addEventListener('touchstart', function () {
          c_carousel.main.touchBegin(event, index);
        }, false);

        c_carousel.main.carousel[i][0].addEventListener('touchmove', function () {
          c_carousel.main.touchMove(event, index);
        }, false);

        c_carousel.main.carousel[i][0].addEventListener('touchend', function () {
          c_carousel.main.touchEnd(event, index);
        }, false);
      })(i);

    }
  },

  touchBegin: function (e, i) {

    this.startX = e.changedTouches[0].pageX;
    // console.log(this.startX);
    this.currentX = parseInt(c_carousel.main.carousel[i][0].style.left, 10);
    // this.maxWidth = c_carousel.main.carousel[i][4];

    c_carousel.main.carousel[i][0].style.transition = "left 0s";
    // this.updatePills(i);
    // c_carousel.main.killCarousel(i);
  },

  touchMove: function (e, i) {
    var touchObj = e.changedTouches[0],
      distX = touchObj.pageX - this.startX,
      cActive = false;

    if (e.touches.length == 1) {
      curX = e.touches[0].pageX;
      curY = e.touches[0].pageY;
      if (Math.abs((curX - this.startX)) > 20) {
        e.preventDefault();
        cActive = true;
        if ((this.startX - 20) < curX) {
          this.touchDir = "right";
        } else if ((this.startX + 20) > curX) {
          this.touchDir = "left";
        } else {
          this.touchDir = "";
        }
      }
    }

    if (cActive) {
      if (this.currentX + distX >= 0) {
        c_carousel.main.carousel[i][0].style.left = 0 + "px";
      } else if (this.currentX + distX <= -(c_carousel.main.carousel[i][4])) {
        c_carousel.main.carousel[i][0].style.left = -(c_carousel.main.carousel[i][4]) + "px";
      } else {
        c_carousel.main.carousel[i][0].style.left = this.currentX + distX + "px";
      }
    }

  },

  touchEnd: function (e, i) {

    this.currentX = parseInt(c_carousel.main.carousel[i][0].style.left, 10);

    c_carousel.main.carousel[i][0].style.left = c_carousel.main.snapAttack(this.currentX, i, this.touchDir);

    c_carousel.main.carousel[i][0].style.transition = "left 1s";

    c_carousel.main.killCarousel(i);

  },

  createLinkedBtns: function (i) {
    var instance = Object.create(this);
    instance.carouselId = i;
    instance.selectorIndex = i.toString();
    instance.id = "c-carousel-linkedButtons-";
    instance.selector = instance.id.concat(instance.selectorIndex);
    instance.el = document.getElementById(instance.selector);
    instance.buttons = instance.el.querySelectorAll(".o-btn");
    this.carousel[i][8] = instance.buttons;
    return instance;
  }


};

// All initial init functions have been moved to component mounted function for purposes of this project
// c_carousel.main.init(); 
// var testButton = c_carousel.main.createLinkedBtns(6);  
// c_carousel_linkedButtons.main.clickEventButtons(testButton);

  var c_carousel_linkedButtons = c_carousel_linkedButtons || {};

  c_carousel_linkedButtons.main = {

    clickEventButtons: function(linkedButtons) {
      var carouselIndex = linkedButtons.carouselId,
      buttonCollection = linkedButtons.buttons;
      // set initial button to active
      buttonCollection[0].classList.add("active");
      for(var i=0; i < buttonCollection.length; i++) {
        c_carousel.main.pillsClickEvent(buttonCollection[i], carouselIndex, i, "mouseover", linkedButtons);
        buttonCollection[i].addEventListener("mouseover", function() {
           buttonCollection.forEach(function(btn) {
             btn.classList.remove("active");
           });
           this.classList.add("active");
        });
      }
    },

    setButtonActive: function(carouselIndex) {
      var linkedButtons = carouselIndex[8];
      var activeButton = linkedButtons[carouselIndex[2]],
          activeButtonClass = activeButton.classList;
      linkedButtons.forEach(function(btn) {
        btn.classList.remove("active");
      });
      activeButton.classList.add("active");
    } // pick up here - just finished this function

  }




</script>


<style lang="less" scoped>

@media (min-width:48em) {
.c-woolWeek-itemContent {
color: #FFFFFF
}
.c-woolWeek-itemContent *,
.c-woolWeek-itemContent .o-btn,
.c-woolWeek-itemContent .o-btn:hover,
.c-woolWeek-itemContent .o-btn:active,
.c-woolWeek-itemContent .o-btn:focus {
color: inherit
}
.c-woolWeek-itemContent--red {
background-color: #903845
}
.c-woolWeek-itemContent--blue {
background-color: #4C95C6
}
}


</style>
