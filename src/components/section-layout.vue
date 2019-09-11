<template>
  <transition name="section-trans">
    <div>
      <header class="c-header-group">
      <CustomHeader bg center aligned>Layout</CustomHeader>
    </header>          
    <!-- Tabs -->
    <tabSections :activeSection.sync="section" :sections="['container', 'grid', 'ultilities']" />
    <!-- Section Heading -->
      <CustomHeader md center aligned class="u-mt3">{{section | capitalize}}</CustomHeader>
      <!-- Container Section -->
      <section v-if="section == 'container'">  
        <div> 
          <p class="c-module-intro" :class="{'show': moduleDetailsShow}">The container object applies rules around wrapping content 
            <button class="o-link" @click="moduleDetailsShow = !moduleDetailsShow">{{moduleDetailsShow ? 'Hide details': 'More details' }}</button>
          </p>
          <div>
            <div>
              <p>The <em>container</em> 'object' uses the class <code>o-container</code>, in which gutters and max-width for all screen sizes are defined.</p>
              <p>You can also apply <em>container</em> rules only at medium and large breakpoints, using classes <code>o-container-md</code> and <code>o-container-lg</code>.
              <p>If you need a 'container' without gutter rules, use the appropiate width class (e.g <code>twelve wide</code>) in conjunction with <code>u-mx-auto</code> (sets horizontal margins to auto) and the <code>u-max-width-<em>n</em>c</code> ultility classes. See below for examples.</p>              
            </div>
          </div>
        </div>

      <ModuleComponent :module="modules.container">
        <div style="text-align:center; padding:1.5rem 0">
        <h3 class="o-hdr o-hdr--t u-my2 center aligned">o-container</h3>
        </div>
      </ModuleComponent>
      <div class="o-divider"></div>
      <ModuleComponent :module="modules.maxWidth">
        <h3 class="o-hdr o-hdr--t u-my2 center aligned">u-mx-auto</h3>
      </ModuleComponent>    
      </section>
      <section v-else-if="section == 'grid'">
        <div> 
          <p class="c-module-intro" :class="{'show': moduleDetailsShow}">The grid collection and more 
            <button class="o-link" @click="moduleDetailsShow = !moduleDetailsShow">{{moduleDetailsShow ? 'Hide details': 'More details' }}</button>
          </p>
          <div>
            <div>
              <p>The <em>grid</em> 'collection' is a seperate module (css file) that can be linked to when required. It contains a robust set of classes to use. It is based on a twelve column layout.</p>
              
              <p>For general purpose layouts, it's preferable that the use of flex ultility classes or custom written css grid is used over this collection, for file size and flexibility benefits.</p> 
            </div>
          </div>
        </div>


<section class="o-section u-center o-container">
      <p class="u-my0">A grid layout can be defined with a <code>grid</code> wrapper element.</p>
      <p class="u-my0">Uniform column widths can also be defined on a grid container by adding <code>[number] wide column.</code></p>
      <p class="u-my0">The grid system is based on a twelve column grid layout.</p>    
      <div class="u-my3">   
        <div class="three column wide grid debug ">
          <div class="column"><p class="u-bg-color-jw-pink u-py3 u-color-secondaryColor">Column</p></div>
          <div class="column"><p class="u-bg-color-secondaryColor u-py3 inverted">Column</p></div>
          <div class="column"><p class="u-bg-color-jw-pink u-py3 u-color-secondaryColor">Column</p></div>
        </div>
      </div>


<div class="c-code o-container u-flex"><a href="#" class="o-btn o-btn--basic o-btn--sm active" style="pointer-events:none">
      &nbsp;HTML
    </a><code class="u-left-align">
          &lt;div class=&quot;three column wide grid&quot;&gt;
          <span class="u-my0 u-ml3 u-text-left" style="white-space:pre-line">
          &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
          &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
          &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
          </span>
        &lt;/div&gt;</code></div>      

      <h3 class="o-hdr o-hdr--t o-hdr--secFont">Related grid element classes</h3>
      <ul class="twelve wide u-font-size-sm u-inline-block u-left-align u-color-primaryColor u-font-family-monospace u-color-primaryColor" style="list-style: disc;">
          <li>relaxed</li>
          <li>very relaxed</li>
          <li>stackable</li>
          <li>padded</li>
          <li>gutterless</li>
          <li>equal width</li>
          <li>horizontally padded</li>
          <li>vertically padded</li>
          <li>left floated</li>
          <li>right floated</li>
          <li>top aligned</li>
          <li>middle aligned</li>
          <li>bottom aligned</li>
          <li>left aligned</li>
          <li>right aligned</li>
          <li>center aligned</li>
          <li>justified</li>
          <li>centered</li>
        </ul>

        <h2 class="o-hdr o-hdr--md">Columns</h2>
        <p class="u-my0">Columns are defined with a class of <code>column</code> and should be direct descendants of a grid or row wrapper.</p>
        <p class="u-mt0">Columns widths can be defined on the column element by using the following convention <code>[number] wide</code> class</p>
        <p class="u-mt0">You can also arbitrary set column widths outside of a grid container or in any context by using the following convention. <code>column--[number digit]</code> (1-12). These also include screen size based variants:- <code>column-sm--[number digit]</code>, <code>column-md--[number digit]</code>. See less/ultility/grid.less for more.</p>
        <div class="u-my3">
          <div class="grid debug">
            <div class="three wide column"><p class="u-bg-color-secondaryColor u-py3 inverted">three wide</p></div>
            <div class="three wide column"><p class="u-bg-color-secondaryColor u-py3 inverted">three wide</p></div>
            <div class="three wide column"><p class="u-bg-color-secondaryColor u-py3 inverted">three wide</p></div>
            <div class="three wide column"><p class="u-bg-color-secondaryColor u-py3 inverted">three wide</p></div>
            <div class="two wide column"><p class="u-bg-color-secondaryColor u-py3 inverted">two wide</p></div>
            <div class="six wide column"><p class="u-bg-color-secondaryColor u-py3 inverted">six wide</p></div>
            <div class="four wide column"><p class="u-bg-color-secondaryColor u-py3 inverted">four wide</p></div>
          </div>
        </div>


        <div class="c-code o-container u-flex"><a href="#" class="o-btn o-btn--basic o-btn--sm active" style="pointer-events:none">
              &nbsp;HTML
            </a><code class="u-left-align">
                &lt;div class=&quot;grid&quot;&gt;
                  <span class="u-my0 u-ml3 u-text-left" style="white-space:pre-line">
                  &lt;div class=&quot;three wide column&quot;&gt;&lt;/div&gt;
                  &lt;div class=&quot;three wide column&quot;&gt;&lt;/div&gt;
                  &lt;div class=&quot;three wide column&quot;&gt;&lt;/div&gt;
                  &lt;div class=&quot;three wide column&quot;&gt;&lt;/div&gt;
                  &lt;div class=&quot;two wide column&quot;&gt;&lt;/div&gt;
                  &lt;div class=&quot;six wide column&quot;&gt;&lt;/div&gt;
                  &lt;div class=&quot;four wide column&quot;&gt;&lt;/div&gt;
                  </span>
                &lt;/div&gt;</code></div>    




        <h3 class="o-hdr o-hdr--t o-hdr--secFont u-mt0">Related column element classes</h3>
        <ul class="u-font-size-sm u-inline-block u-left-align u-color-primaryColor u-font-family-monospace u-color-primaryColor" style="list-style: disc;">
            <li>left floated</li>
            <li>right floated</li>
            <li>top aligned</li>
            <li>middle aligned</li>
            <li>bottom aligned</li>
            <li>left aligned</li>
            <li>right aligned</li>
            <li>center aligned</li>
            <li>justified</li>
            <li>centered</li>
          </ul>

      <div class="u-mt3">
      <h3 class="o-hdr o-hdr--md">Rows</h3>
      <p class="u-my0">Rows are groups of columns which are aligned horizontally.</p>

      <p class="u-my0">Rows can either be explicit, marked with an additional row element, or implicit, automatically occurring when no more space is left in a previous row.</p>

      <p class="u-my0">After each group of columns vertical spacing is added to separate each group of columns, creating vertical rhythm.</p>
      <div class="u-my3">
        <div class="four column grid debug">
        <div class="row">
          <div class="column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
          <div class="column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
          <div class="column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
        </div>
        <div class="column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
        <div class="column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
        <div class="column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
        <div class="column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
        </div>
      </div>

        <div class="c-code o-container u-flex">
          <a href="#" class="o-btn o-btn--basic o-btn--sm active" style="pointer-events:none">&nbsp;HTML</a>
          <code class="u-left-align" style="white-space:pre-line">
              &lt;div class=&quot;four column grid&quot;&gt;
              &lt;div class=&quot;row&quot;&gt;
                &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
                &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
                &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
              &lt;/div&gt;
              &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
              &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
              &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
              &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;                                  
              &lt;/div&gt;                  
            </code>
          </div>   


      <h3 class="o-hdr o-hdr--md">Negative Margins</h3>
      <p class="u-my0">Since all grid columns include gutters, grids use negative margins to make sure that the first and last columns sit flush with content outside the grid.</p>

      <p class="u-mt0">In some cases, like when a column or row is colored, you may want to avoid using negative margins. You can do this by using a padded grid variation.</p>

      <div class="padded grid">
        <div class="three column row u-bg-color-jw-navy-shade1">
          <div class="column"><p class="u-border inverted">column</p></div>
          <div class="column"><p class="u-border inverted">column</p></div>
          <div class="column"><p class="u-border inverted">column</p></div>
        </div>
        <div class="eight column row u-bg-color-jw-navy-shade4">
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
        </div>
      </div>
    </div>   

    <div class="c-code o-container u-flex">
      <a href="#" class="o-btn o-btn--basic o-btn--sm active" style="pointer-events:none">&nbsp;HTML</a>
      <code class="u-left-align" style="white-space:pre-line">
        &lt;div class=&quot;padded grid&quot;&gt;
          &lt;div class=&quot;three column row&quot;&gt;
            &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
          &lt;/div&gt;
          &lt;div class=&quot;eight column row&quot;&gt;
            &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;                  
        </code>
      </div>       

    <h3 class="o-hdr o-hdr--md">Nested grids</h3>

    <div class="two column grid u-py3 ">
      <div class="column u-border">
        <div class="three column grid u-bg-color-jw-navy-shade4">
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
          <div class="column"><p class="u-border">column</p></div>
        </div>
      </div>
      <div class="column u-border"><p class="u-border">column</p></div>
      <div class="column u-border"><p class="u-border">column</p></div>
      <div class="column u-border">
        <div class="grid u-bg-color-jw-navy-shade4">
          <div class="six wide column"><p class="u-border">column</p></div>
          <div class="six wide column"><p class="u-border">column</p></div>
        </div>
      </div>
    </div>


    <div class="c-code o-container u-flex">
      <a href="#" class="o-btn o-btn--basic o-btn--sm active" style="pointer-events:none">&nbsp;HTML</a>
      <code class="u-left-align" style="white-space:pre-line">
        &lt;div class=&quot;two column grid&quot;&gt;
          &lt;div class=&quot;column&quot;&gt;
            &lt;div class=&quot;three column grid&quot;&gt;
              &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
              &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
              &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
          &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
          &lt;div class=&quot;column&quot;&gt;
            &lt;div class=&quot;grid&quot;&gt;
              &lt;div class=&quot;six wide column&quot;&gt;&lt;/div&gt;
              &lt;div class=&quot;six wide column&quot;&gt;&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;               
        </code>
      </div>                

    <h3 class="o-hdr o-hdr--md">Clearing content</h3>
    <p class="u-mt0">Row wrappers will automatically clear previous columns, making them useful when using floated variations.</p>
    <div class="grid debug">
      <div class="four column row">
        <div class="left floated column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
        <div class="right floated column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
      </div>
      <div class="row">
        <div class="three wide column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
        <div class="five wide column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
        <div class="four wide column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
      </div>
    </div>

    <div class="c-code o-container u-flex">
      <a href="#" class="o-btn o-btn--basic o-btn--sm active" style="pointer-events:none">&nbsp;HTML</a>
      <code class="u-left-align" style="white-space:pre-line">
        &lt;div class=&quot;grid&quot;&gt;
          &lt;div class=&quot;four column row&quot;&gt;
            &lt;div class=&quot;left floated column&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;right floated column&quot;&gt;&lt;/div&gt;
          &lt;/div&gt;
          &lt;div class=&quot;row&quot;&gt;
            &lt;div class=&quot;three wide column&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;five wide column&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;four wide column&quot;&gt;&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;              
        </code>
      </div>       

    <h3 class="o-hdr o-hdr--md">Reponsive Grid</h3>
    <p class="u-mt0">Columns (and rows) can have their width defined at multiple breakpoints. Use the convention <code>[number] wide [screen]</code></p>
    <div class="grid debug ">
      <div class="six wide mobile six wide tablet two wide computer column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
      <div class="six wide mobile six wide tablet two wide computer column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
      <div class="four wide mobile six wide tablet two wide computer column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
      <div class="four wide mobile six wide tablet two wide computer column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
      <div class="four wide mobile twelve wide tablet four wide computer column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
    </div>


    <div class="c-code o-container u-flex">
      <a href="#" class="o-btn o-btn--basic o-btn--sm active" style="pointer-events:none">&nbsp;HTML</a>
      <code class="u-left-align" style="white-space:pre-line">
        &lt;div class=&quot;grid&quot;&gt;
          &lt;div class=&quot;six wide mobile six wide tablet two wide computer column&quot;&gt;&lt;/div&gt;
          &lt;div class=&quot;six wide mobile six wide tablet two wide computer column&quot;&gt;&lt;/div&gt;
          &lt;div class=&quot;four wide mobile six wide tablet two wide computer column&quot;&gt;&lt;/div&gt;
          &lt;div class=&quot;four wide mobile six wide tablet two wide computer column&quot;&gt;&lt;/div&gt;
          &lt;div class=&quot;four wide mobile twelve wide tablet four wide computer column&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
        </code>
      </div>       


    <h3 class="o-hdr o-hdr--md">Equal Width Grid</h3>
    <p class="u-mt0">Make all columns equal width <span class="u-font-family-primary">equal width</span></p>
    <div class="equal width grid debug ">
      <div class="column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
      <div class="column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
      <div class="column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
      <div class="column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
      <div class="column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
    </div>

    <div class="c-code o-container u-flex">
      <a href="#" class="o-btn o-btn--basic o-btn--sm active" style="pointer-events:none">&nbsp;HTML</a>
      <code class="u-left-align" style="white-space:pre-line">
        &lt;div class=&quot;equal width grid&quot;&gt;
          &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
          &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
          &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
          &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
          &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
        &lt;/div&gt; 
        </code>
      </div>       

    <h3 class="o-hdr o-hdr--md">Stackable Grid</h3>
    <p class="u-mt0">Make columns stack on mobile (below 768px). Use <code>stackable</code></p>
    <div class="equal width stackable grid debug ">
      <div class="column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
      <div class="column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
      <div class="column"><p class="u-bg-color-secondaryColor u-py3 inverted">column</p></div>
    </div>

    <div class="c-code o-container u-flex">
      <a href="#" class="o-btn o-btn--basic o-btn--sm active" style="pointer-events:none">&nbsp;HTML</a>
      <code class="u-left-align" style="white-space:pre-line">
        &lt;div class=&quot;equal width stackable grid&quot;&gt;
          &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
          &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
          &lt;div class=&quot;column&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
        </code>
      </div>       


    <h3 class="o-hdr o-hdr--md">Gutterless Grid</h3>
    <p class="u-mt0">Use <code>gutterless</code></p>
    <div class="grid gutterless ">
        <div class="column">
          <p class="u-bg-color-secondaryColor u-py3 inverted">Column 1</p>
        </div>
        <div class="column">
          <p class="u-bg-color-secondaryColor u-py3 inverted">Column 2</p>
        </div>
        <div class="column">
          <p class="u-bg-color-secondaryColor u-py3 inverted">Column 3</p>
        </div>
        <div class="column">
          <p class="u-bg-color-secondaryColor u-py3 inverted">Column 4</p>
        </div>
        <div class="column">
          <p class="u-bg-color-secondaryColor u-py3 inverted">Column 5</p>
        </div>
        <div class="column">
          <p class="u-bg-color-secondaryColor u-py3 inverted">Column 6</p>
        </div>
        <div class="column">
          <p class="u-bg-color-secondaryColor u-py3 inverted">Column 7</p>
        </div>
        <div class="column">
          <p class="u-bg-color-secondaryColor u-py3 inverted">Column 8</p>
        </div>
        <div class="column">
          <p class="u-bg-color-secondaryColor u-py3 inverted">Column 9</p>
        </div>
        <div class="column">
          <p class="u-bg-color-secondaryColor u-py3 inverted">Column 10</p>
        </div>
        <div class="column">
          <p class="u-bg-color-secondaryColor u-py3 inverted">Column 11</p>
        </div>
        <div class="column">
          <p class="u-bg-color-secondaryColor u-py3 inverted">Column 12</p>
        </div>
      </div>


    <div class="c-code o-container u-flex">
      <a href="#" class="o-btn o-btn--basic o-btn--sm active" style="pointer-events:none">&nbsp;HTML</a>
      <code class="u-left-align" style="white-space:pre-line">
        &lt;div class=&quot;grid gutterless&quot;&gt;
            &lt;div class=&quot;column&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;column&quot;&gt;
            &lt;/div&gt;
          &lt;/div&gt; 
        </code>
      </div>         

      <h3 class="o-hdr o-hdr--md">Relaxed Grid</h3>
      <p class="u-mt0">Use <code>relaxed</code></p>
      <div class="relaxed equal width grid ">
          <div class="column">
            <p class="u-bg-color-secondaryColor u-py3 inverted">Column 1</p>
          </div>
          <div class="column">
            <p class="u-bg-color-secondaryColor u-py3 inverted">Column 2</p>
          </div>
          <div class="column">
            <p class="u-bg-color-secondaryColor u-py3 inverted">Column 3</p>
          </div>
          <div class="column">
            <p class="u-bg-color-secondaryColor u-py3 inverted">Column 4</p>
          </div>
          <div class="column">
            <p class="u-bg-color-secondaryColor u-py3 inverted">Column 5</p>
          </div>
          <div class="column">
            <p class="u-bg-color-secondaryColor u-py3 inverted">Column 6</p>
          </div>
        </div>


    <div class="c-code o-container u-flex">
      <a href="#" class="o-btn o-btn--basic o-btn--sm active" style="pointer-events:none">&nbsp;HTML</a>
      <code class="u-left-align" style="white-space:pre-line">
      &lt;div class=&quot;relaxed equal width grid &quot;&gt;
          &lt;div class=&quot;column&quot;&gt;
          &lt;/div&gt;
          &lt;div class=&quot;column&quot;&gt;
          &lt;/div&gt;
          &lt;div class=&quot;column&quot;&gt;
          &lt;/div&gt;
          &lt;div class=&quot;column&quot;&gt;
          &lt;/div&gt;
          &lt;div class=&quot;column&quot;&gt;
          &lt;/div&gt;
          &lt;div class=&quot;column&quot;&gt;
          &lt;/div&gt;
        &lt;/div&gt; 
        </code>
      </div>            

       

      <h3 class="o-hdr o-hdr--md">Very Relaxed Grid</h3>
      <p class="u-mt0">Use <code>very relaxed</code></p>
      <div class="very relaxed equal width grid ">
          <div class="column">
            <p class="u-bg-color-secondaryColor u-py3 inverted">Column 1</p>
          </div>
          <div class="column">
            <p class="u-bg-color-secondaryColor u-py3 inverted">Column 2</p>
          </div>
          <div class="column">
            <p class="u-bg-color-secondaryColor u-py3 inverted">Column 3</p>
          </div>
        </div>

          <div class="c-code o-container u-flex">
            <a href="#" class="o-btn o-btn--basic o-btn--sm active" style="pointer-events:none">&nbsp;HTML</a>
            <code class="u-left-align" style="white-space:pre-line">
              &lt;div class=&quot;very relaxed equal width grid&quot;&gt;
                  &lt;div class=&quot;column&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;column&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;column&quot;&gt;
                  &lt;/div&gt;
                &lt;/div&gt;  
              </code>
            </div>                 


        </section>        

      </section>
      <section class="c-section-ulti o-container" v-else-if="section == 'ultilities'">
        <select v-model="ultils.active" class="u-max-width-2c u-mx-auto u-my2">
          <option value="default">Default</option>
          <option value="sm">sm classes</option>
          <option value="md">md classes</option>
          <option value="lg">lg classes</option>
        </select>
        <code class="u-p0">
          <div>
            <!-- Col 1 -->
            <div>
              <ultilityClass :collection ="ultilsLayout" :active="ultils.active" />
            </div>
            <!-- Col 2 -->
            <div>            
              <ultilityClass :collection ="ultilsLayout" :active="ultils.active" :from="25" :to="ultilsLayout.length" />
            </div>
            <!-- Col 3 -->
            <div>
              <h4 class="o-hdr o-hdr--t o-hdr--secFont u-mt3">Max width</h4>
              <ultilityClass :collection ="ultilsMaxWidth" :active="ultils.active" />
              <h4 class="o-hdr o-hdr--t o-hdr--secFont u-mt3">% Widths</h4>
              <ultilityClass :collection ="ultilsWidthPercent" :active="ultils.active" />
            </div> 

          </div>
        </code>
      </section> 



    </div>    
  </transition>
</template>


<script>

import ModuleComponent from './modules/module.vue'
import CustomHeader from './heading'
import CustomButton from "./button";
import { layoutUlt, maxWidthCol, widthPercent } from './cssClasses/layout'
import ultilityClass from "./ultilityClass"
import tabSections from "./tabSections"
import { moduleSectionMixins } from "../mixins/module-section"

export default {
  // Name of this component
  name: 'sectionLayout',
  components: {
    ModuleComponent,
    CustomHeader,
    CustomButton,
    ultilityClass,
    tabSections
  },
  data() {
    return {
      moduleDetailsShow: false,
      section: 'container',
      ultils: {
        active: 'default',
        layoutUlt,
        maxWidthCol,
        widthPercent
      },
      modules: {
        container: {
          name: 'Container',
          html: {
            show: false,
            content: ''
          },
          debug: {
            show: true,
            styles: "background:rgba(277, 7, 19, .1); min-height:150px; margin-top:1.5rem; display: flex; justify-content: center; align-items: center"
          },
          classes: {
            default: ['o-container'],
            applied: [],
            available: [
              { class: ['o-container-md', "Apply container styles at medium breakpoint", true] },
              { class: ['o-container-lg', "Apply container styles at large breakpoint", true] }
            ]
          }
        },
        maxWidth: {
          name: 'maxWidth',
          html: {
            show: false,
            content: ''
          },
          debug: {
            show: true,
            styles: "background:rgba(277, 7, 19, .1); min-height:150px; margin-top:1.5rem; display: flex; justify-content: center; align-items: center"
          },
          classes: {
            default: ['u-mx-auto'],
            applied: [],
            available: [
              { class: ['u-max-width-1c', "Max width of 1 column", true] },
              { class: ['u-max-width-2c', "Max width of 2 column", true] },
              { class: ['u-max-width-3c', "Max width of 3 column", true] },
              { class: ['u-max-width-4c', "Max width of 4 column", true] },
              { class: ['u-max-width-5c', "Max width of 5 column", true] },
              { class: ['u-max-width-6c', "Max width of 6 column", true] },
              { class: ['u-max-width-7c', "Max width of 7 column", true] },
              { class: ['u-max-width-8c', "Max width of 8 column", true] },
              { class: ['u-max-width-9c', "Max width of 9 column", true] },
              { class: ['u-max-width-10c', "Max width of 10 column", true] },
              { class: ['u-max-width-11c', "Max width of 11 column", true] }
            ]
          }
        }        
      }
    }    
  },
  computed: {
    ultilsLayout() {
      return this.ultils.layoutUlt.filter((item) => this.ultilGroup(item))
    },
    ultilsMaxWidth() {
      return this.ultils.maxWidthCol.filter((item) => this.ultilGroup(item))
    },
    ultilsWidthPercent() {
      return this.ultils.widthPercent.filter((item) => this.ultilGroup(item))
    }            
  },
  mixins: [moduleSectionMixins]
}


</script>

<style scoped lang="less">

.o-section {
  --paragraphFontSize: var(--small);
}

@media (min-width:48em) {

  .o-section ul {
    column-count:3;
    list-style-position:inside;
  }

}


</style>