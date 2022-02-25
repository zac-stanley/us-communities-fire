# United States Communities in Harms Way:
## **Where are the Vulnerable in Relation to Wildfire Hazards**  

<!-- TOC -->

## Table of Contents
- [Part I. *DRAFT* Project Proposal](#part-i-project-summary-proposal)  
- [Part II. Data Sources](#part-ii-data-sources)  
    - [HOLC Neighborhoods](#holc-neighborhoods)
    - [Aspects of Wealth](#aspects-of-wealth)
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

### Wildfire Hazrd Potential


1. [2020 Wildfire Hazard Potential (WHP) for the United States](https://www.fs.usda.gov/rmrs/datasets/wildfire-hazard-potential-united-states-270-m-version-2020-3rd-edition). This is a 270-m spatial resolution raster dataset that classifies Wildfire Hazard Potential in the conterminous United States into 5-discrete classes based on percentile breaks:   
       
    1. Very Low
    2. Low
    3. Moderate
    4. High
    5. Very High  

   From the metadata: WHP is an index that quantifies the relative potential for wildfire that may be difficult to control, used as a measure to help prioritize where fuel treatments may be needed.  

   This data won't be displayed on the final map, it will simply be used as an input to define and refine communities that should be further analyzed based on their proxitmity to Wildfire Hazard Potential.

### Aspects of Wealth
Exploring wealth under the umbrella of the ability to accumulate generational wealth through time.

#### Race & Segregation
[*Race for the Population 18 years+ 2020*](https://data.census.gov/cedsci/table?q=p3&t=Race%20and%20Ethnicity&g=0500000US21067%241400000&y=2020)
- Data available to download:
    - CSV metadata
    - CSV file data
    - TXT file table title


#### Median Household income
[*S1901 Income in the past 12 months (in 2019 inflation-adjusted dollars)*](https://data.census.gov/cedsci/table?q=income&g=0500000US21067%241400000&y=2019)
- Data available to download: 
    - CSV file metadata
    - CSV file data
    - TXT file table title
    - 19.4 kb

#### Percent of Population in Poverty
[*S1701 Poverty Status in the past 12 months (ACS)*](https://data.census.gov/cedsci/table?q=s1701&g=0500000US21067%241400000&y=2019)
- Data available to download:
    - CSV File Metadata
    - CSV file data
    - TXT file table title
    - 59.7 kb

#### Mortgage Approval Rates through time 
Looking through HMDA Home mortgage disclosure act data to find. Still needs a source.

#### Percent Home Ownership today & Owner Reported Property Value Today
[*US census bureau American Community Survey DP04 2019*](https://data.census.gov/cedsci/table?q=DP04&g=0500000US21067%241400000)
- Data available to download:
- CSV file metadata
    - CSV file data
    - TXT file table title
    - 88.5 kb

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