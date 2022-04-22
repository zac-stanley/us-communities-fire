# United States Communities in Harm's Way:
## **Where are the Vulnerable in Relation to Wildfire Hazards?**  

<!-- TOC -->

## Table of Contents
- [I. Introduction](#introduction)
- [II. Methodology](#II-Methodology)
   - [A. Data](#a-data)
   - [B. Medium for Delivery](#b-medium-for-delivery)
   - [C. Application Layout](#c-application-layout)
   - [D. Thematic Representation](#d-thematic-representation)
   - [E. User Interaction](#e-user-interaction)
   - [F. Aesthetics and Deisgn Considerations](#f-aesthetics-design-considerations)
   - [G. Conclusion](#g-conclusion)
   
<!-- /TOC -->

## I. Introduction  
This project examines where wildfire hazard potential intersects with socially vulnerable census designated places throughout the conterminous United States. The data sources span from 2018 to 2020. 

The map will appeal to those looking to understand not only how wildfire can affect developed areas and their inhabitants but what developed area may be in greater need of additional support and planning both prior to and after wildland fires. 

The user will be inspired to explore areas not traditionally thought of as areas with high wildfire potential such as the southeast.

At a general level the map will potentially reveal specific communities that could benefit from additional emergency response planning efforts.
Full Scale Wire Frame:  
![Wire Frame 1](images/wireframe1.jpg)  
Resulting Mock-up:  
![Mockup 1](images/FullScreeenMockup_Small.jpg)  
Zoomed Wire Frame:
![Wire Frame 2](images/wireframe2.jpg)  
Reaulting Mock-up:  
![Mockup 2](images/FullScreeenMockup_Zoomed_Small.jpg)  

## II: Methodology  
The methods for the project involve two different types overlay analysis: zonal statistics and weighted mean, both of which are performed on the CDP polygons. The zonal statistics use a majority method with raster values for WHP in a CDP and weighted mean is used with SVI census tracts intersected with CDPs.

### A. Data  

1. [2020 Wildfire Hazard Potential (WHP) for the United States](https://www.fs.usda.gov/rmrs/datasets/wildfire-hazard-potential-united-states-270-m-version-2020-3rd-edition). This is a 270-m spatial resolution raster dataset that classifies wildfire hazard potential in the conterminous United States into 5-discrete classes based on percentile breaks:   
       
    - **Class 1:** Very Low
    - **Class 2:** Low
    - **Class 3:** Moderate
    - **Class 4:** High
    - **Class 5:** Very High   

2. [U.S. Census Designated Places (CDPs)](https://www2.census.gov/geo/tiger/GENZ2020/shp/cb_2020_us_place_500k.zip). These are simplified representations of selected geographic areas from the U.S. Census Bureau's Master Address File / Topologically Integrated Geographic Encoding and Referencing (MAF/TIGER) Database (MTDB). These boundary files are specifically designed for small-scale thematic mapping.    

3. [Centers for Disease Control Social Vulnerability Index (SVIs)](https://www.atsdr.cdc.gov/placeandhealth/svi/documentation/SVI_documentation_2018.html). This data is available at the tract level and has four individual vulnerability indices plus an aggregate index score:  

    - **Socioeconomic**
    - **Household Composition & Disability**
    - **Minority Status & Language**
    - **Housing Type & Transportation**
    - **Overall Vulnerability**  

**Social Vulnerability Index Classes:**  
![SVI Classes](images/CDC-SVI-Variables.jpg)  

The process for exploring, processing and ultimately analyzing the data used Python / Jupyter Notebooks with the the following libraries: Pandas, Matplotlib and GeoPandas. The WHP data was analyzed using zonal statistics where the raster dataset was overlayed with the CDPs to calculate the 'majority' of pixels in each polygon. Based on the majority a WHP class was assigned to each CDP.  

**How majority zonal statistics work:**  
![Majority](images/Picture1.jpg) 

 Additionally, classes 1 and 2 were removed so that only only CDPs with moderate to very high (classes 3, 4 and 5) hazard potential were included in the final output.  

CDPs were the minimum mapping unit for the analysis yet the SVI data is available only at the tract level which is too detailed. To mitigate this issue another type of overlay analysis was performed; weighted mean area analysis. In this operation the average SVI values for each individual vulnerability and the overall vulnerability are averaged again based on the area inside the CDP polygon they intersect with. The larger the area a particular vulnerability occupies the greater value or weight it is given in calculating the vulnerability score of the CDP. This operation was performed for each individual SVI and for the overall SVI for each CDP with a WHP class of 3, 4 or 5.

**Sample results of analyzed and processed data:**  
![Table](images/cleanedTable.JPG)  

Lastly, the geometric center or centroids of the polygons were taken so that the small or maximum scale mapping described above could be achieved. This process ensured that the attributes in the polygon were retained in the point output.  

The final output polygon and point files are GeoJSON.  

### B. Medium for Delivery  

The map will be a browser-based application accessible across mobile and desktop devices.  

The technology stack will include HTML/CSS/JS using a combination of [Leaflet](https://leafletjs.com/) and [Mapbox JavaScript libraries](https://docs.mapbox.com/mapbox.js/api/v3.3.1/) and will most likely use an [Assembly.css](https://labs.mapbox.com/assembly/) responsive framework. In addition, the map will include search bar functionality geolocating CDPs.  

### C. Application Layout  

Here you'll want to consider the general layout of the web page and how it will "respond" to different device sizes. It's probably easiest to include 2 or three very simple wireframes showing mobile, tablet, and desktop layouts (not detailed mockups).

### D. Thematic Representation  

The map will use different thematic representations at different scales. At maximum scale the map will use graduated symbols to display overall SVI by CDP broken up into five classes and diverging colors to display three class WFH potential resulting in a bi-variate map. 

At a yet to be determined zoom scale the map will show actual CDP polygons classified using diverging color to show WHP.  

### E. User Interaction  

The map will be a full screen map that requires user input to explore. These actions include panning, zooming, hovering and clicking on the features. 

When a graduated symbol is hovered on at initial map scale a tooltip will display with some basic information about the feature.  

**Tooltip Example:**  
![Tooltip](images/gradTooltip.jpg)  

When a feature is clicked on at the initial map scale it will trigger a zoom event where the map will zoom to that feature and a polygon of the CDP will be displayed along with a a sidebar popup holding a bar chart of four SVI weighted mean scores that make up the overall SVI. This capbility will also be available using a a dropdown search of all of CDPs on the map.  

**Dropdown Search Example:**  
![Search](images/search.jpg)  

### F. Aesthetics and Design Considerations  

The tone of the map will challenge the normal aesthetic of fire mapping, that is it won't be a black basemap with graduated colors from yellow to deep red. It will instead use colors that suggest hope and resilence and some degree of lightness. 

The font choices will be sans serif and consistently applied throughout the map
in tooltips, charts and title/sub-title etc. 

### G. Conclusion  

Provide a brief (one or two paragraphs) statement to conclude the proposal. This will likely be restating what you said in the introduction, but also (re)consider the format we used in the first assignment (a topic with a motivating question).


### References
- [Community Wildfire Prevention & Mitigation Report](https://www.fire.ca.gov/media/5584/45-day-report-final.pdf) ordered the by California Governors Office
- Centers for Disease Control and Prevention/ Agency for Toxic Substances and Disease Registry/ Geospatial Research, Analysis, and Services Program. CDC/ATSDR Social Vulnerability Index 2018 Database United States.
