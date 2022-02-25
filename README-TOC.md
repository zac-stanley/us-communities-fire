# United States Communities in Harms Way:
## **Where are the Vulnerable in Relation to Wildfire Hazards**  

<!-- TOC -->

## Table of Contents
- [Part I. *DRAFT* Project Proposal](#part-i-project-summary-proposal)  
- [Part II. Data Sources](#part-ii-data-sources)  
    - [Wildfire Hazard Potential ](#wildfire-hazard-potential)
    - [Census Designated Places](#census-designated-places)
        - [Race & Segregation](#race-&-segregation)
        - [Median Household income](#median-houshold-income)
        - [Percent of Population in Poverty](#percent-of-population-in-poverty)
        - [Mortgage Approval Rates through time](#mortgage-approval-rates-through-time) 
        - [Percent Home Ownership today & Owner Reported Property Value Today](#percet-home-ownership-today-&-owner-reported-property-value-today)
- [Part III. Proposed Visuals](#part-iii-proposed-visuals)
    - [Visual 1](#visual-1)
- [Part IV. Objectives & User Needs](#part-iv-objectives-&-user-needs)
- [Part V. Data Processing & Storage](#part-v-data-processing-&-stograge)
- [Part VI. JS Libraries to Employ](#part-vi-js-libraries-to-employ)
- [Part VII. Relevant Tech & Hosting Platform](#part-vii-relevant-tech-&-hosting-platform)
- [Inspiration](#inspiration)
- [References](#references)  

<!-- /TOC -->

## Part I: Project Summary Proposal

The *spatial analysis* component will first look at 2014 Wildfire Hazard Potential (WHP) for the United States as the initial metric - areas with moderate to very high fire risk will determine what communities are futher analyzed. The results of this will then be overlayed 2015 U.S. Census Designated Places \(CDPs\) polygons \(I need research an appropriate buffer distance that takes into account how far a fire can spread, or if the there is a recommeneded distance at which communities are evacuated) using weighted averaging or zonal statistics to determine what hazard potential is assgined to a CDP. The CDPs will be joined to to multiple tables of U.S. Census 5-year estimate American Community Survey Data profiles (ACS). From these raw ACS data, averages will be calculated for each CDP input into the vulnerability index and compared to the national average. If one of the CDP inputs has an average higher than that of the national average for a given it will be assigned a score of 1 on the vulnerability index. These results of each average calculation will be combined to create a non-weighted vulberability index by which communities will be ranked on a scale from 1-7 (1 being the least vulnerable and 7 being the most vulnerable) that will look something like the following:

## Part II: Data Sources
There are three key datasets that will be used to perform analysis and visualize the results.

### Wildfire Hazard Potential  

1. [2020 Wildfire Hazard Potential (WHP) for the United States](https://www.fs.usda.gov/rmrs/datasets/wildfire-hazard-potential-united-states-270-m-version-2020-3rd-edition). This is a 270-m spatial resolution raster dataset that classifies Wildfire Hazard Potential in the conterminous United States into 5-discrete classes based on percentile breaks:   
       
    1. Very Low
    2. Low
    3. Moderate
    4. High
    5. Very High  

   From the metadata: WHP is an index that quantifies the relative potential for wildfire that may be difficult to control, used as a measure to help prioritize where fuel treatments may be needed.  

   This data won't be displayed on the final map, it will simply be used as an input to define and refine communities that should be further analyzed based on their proxitmity to Wildfire Hazard Potential.  

### United States Census Designated Places  

2. [U.S. Census Designated Places](https://www2.census.gov/geo/tiger/GENZ2020/shp/cb_2020_us_place_500k.zip). These are simplified representations of selected geographic areas from the U.S. Census Bureau's Master Address File / Topologically Integrated Geographic Encoding and Referencing (MAF/TIGER) Database (MTDB). These boundary files are specifically designed for small-scale thematic mapping.  

This dataset will be the core spatial component of this project and will be repressented in the final product as graduated symbols based on the geometric center of the polygon at max scale and when zoomed in the map will display the full geometry of the polygon. These data will be loaded into the map as geoJSON files.

#### Centers for Disease Control Social Vulnerability Index  

[CDC social vulnerability index (SVI)](https://www.atsdr.cdc.gov/placeandhealth/svi/documentation/SVI_documentation_2018.html). This data is tract available at the tract level and has four individual vulnerability components:  

- Socioeconmic
- Household Composition & Disability
- Minority Status & Language
- Housing Type & Transportation



## Part III. Proposed Visuals
### Mockup WireFrame 1
![GeoPandas](graphics/wireframe_proposal1.jpg)
**Figure 1.** Mockup wireframe 1st proposal for project's html look and feel with user interaction buttons labeled.

A similar project to reference was 673 4-5.

### Visual 1
Timeline of images from papers or hisotric jounral article map depictions. Articales of interest:
     - Kellogg, John. 1982. The Formation of Black Residential Areas in Lexington, Kentucky 1865-1887. Southern Historical Association. Vol 48. No 1. pp. 21-52.
    - O'Malley, Nancy. 2002. The Pursuit of Freedom The Evolution of Kinkeadtown, an African American Post-Civil War Neighborhood in Lexington, Kentucky. Winterthur Portfolio. Vol 37. No. 4. pp. 187-218.
    - Rabinowitz, Howard. 1976. From Reconstruction to Redemption in the Urban South. Journal of Urban History. Vol 2. No 2. pp 169-194
    - Kellogg, John. 1977. Negro Urban Clusters in the Posbellum South. Geographical Review. Vol 67. No 3. pp. 310-321.
    - Kendi, Ibram. 2016. Stamped from the Beginning The Definitive History of Racist Ideas in America. New York, Bold Type Books. pp 583. 

## Part IV. Objectives & User Needs

## Part V. Data Processing & Storage
## Part VI. JS Libraries to Employ
- Mapbox GL JS for loading vector tiles and smooth interaction
- D3.js to load data as CSV
- CSV converted on the fly to geoJSON with personal written JS loop
- Chroma.js potentially for color scale
- Sparkline.js potentially for tooltip specs of data or graphing

## Part VII. Relevant Tech & Hosting Platform

## Inspiration
- [ramp styling 2020 census by race](https://mtgis-portal.geo.census.gov/arcgis/apps/MapSeries/index.html?appid=2566121a73de463995ed2b2fd7ff6eb7)
- [overlap of holc designations & secondary ramp map](https://lojic.maps.arcgis.com/apps/MapSeries/index.html?appid=e4d29907953c4094a17cb9ea8f8f89de)

## References
- Crampton, J.W. 2014. The power of maps. In: Cloke, P., Crang, P., Goodwin, M. (Eds.), Introducing human geographies, 3. Hodder Education London.
- Robert K. Nelson, LaDale Winling, Richard Marciano, Nathan Connolly, et al., “Mapping Inequality,” American Panorama, ed. Robert K. Nelson and Edward L. Ayers, accessed January 25, 2022, https://dsl.richmond.edu/panorama/redlining//#loc=14/38.041/-84.526&city=lexington-ky&text=downloads