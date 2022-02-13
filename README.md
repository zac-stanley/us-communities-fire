# United States Communities in Harms Way:
## **Where are the Vulnerable in Relation to Wildfire Hazards**  
### *DRAFT* Project Description
This project will attempt to visualize vulnerable communities throughout the United States that are at particular risk to wildfire. It will do so through *spatial analysis* and development of an interactive *web mapping application*.  

The *spatial analysis* component will first look at 2014 Wildfire Hazard Potential (WHP) for the United States as the initial metric - areas with moderate to very high fire risk will determine what communities are futher analyzed. The results of this will then be overlayed 2015 U.S. Census Designated Places \(CDPs\) polygons \(I need research an appropriate buffer distance that takes into account how far a fire can spread, or if the there is a recommeneded distance at which communities are evacuated) using weighted averaging or zonal statistics to determine what hazard potential is assgined to a CDP. The CDPs will be joined to to multiple tables of U.S. Census 5-year estimate American Community Survey Data profiles (ACS). From these raw ACS data, averages will be calculated for each CDP input into the vulnerability index and compared to the national average. If one of the CDP inputs has an average higher than that of the national average for a given it will be assigned a score of 1 on the vulnerability index. These results of each average calculation will be combined to create a non-weighted vulberability index by which communities will be ranked on a scale from 1-7 (1 being the least vulnerable and 7 being the most vulnerable) that will look something like the following:

| Vulnerability Measure (% is > national average) | Score       |
| ------------------------------------------------| ----------- |
| Households below poverty level                  | 1           |
| Renters                                         | 1           |
| Households w/out a car                          | 1           |
| People 65 years or older                        | 1           |
| People 5 years or under                         | 1           |
| Disabled people                                 | 1           |
| Speak English less than very well               | 1           |
| **Maximum Index Score Potential**               | **7**       |

The results of the *spatial analysis* will be visualized in an interactive *web mapping application* using a couple of different javascript libraries most likely Leaflet and D3, possibly Mapbox as well. The map will focus on vulnerable communities and their vulnerability score index value. The map will likely be represented at full zoom scale using bi-variate symbology with graduated symbol size representing vulnerability index score and the color representing wildfire hazard potential (moderate to very high). Some potential interactivity will include clicking on a community that triggers zooming to it, this will also trigger a popup describing both the wildfire risk to the community along with the individual scores that sum to the vulnerability index as described above. While examining the same community there would be a chart in the sidebar comparing the individual metrics that comprise the vulnerability index compared with state or national averages ex. rate of disable folks in community vs. those at the state level \(this idea needs to fleshed out more\).  

Some of the initial thinking for this project was inspired by [Community Wildfire Prevention & Mitigation Report](https://www.fire.ca.gov/media/5584/45-day-report-final.pdf) ordered the by California Governors Office. What the the report lacks however, is a more general approach that is led by fire risk data that includes a national approach not just CalFIRE state responsibility areas (SRAs). The methodology set out in the report uses priority treatment projects as a starting point and uses fire risk data and community vulnerability to help justify those projects. The intent of this project will be to have wildfire hazard data drive where additional community vulnerability needs should be examined and assessed. 

In addition to helping locate areas where fuel treatment could occur there are myriad other potential benefits that could result from this project. To name a few: potential grants for low-income families to get monies to help with brush clearing on their properties, emergency notification/evacuations orders communicated in languages other than english spoken in a community, establishing early evacuation lists of residents with disabilities and those without access to their own transportation, among others.

### State of the Data
There are three key datasets that will be used to perform analysis and visualize the results.

1. [2014 Wildfire Hazard Potential for the United States](https://www.fs.usda.gov/rmrs/datasets/wildfire-hazard-potential-united-states-270-m-version-2020-3rd-edition). This is a 270-m spatial resolution raster dataset that classifies Wildfire Hazard Potential in the conterminous United States into 5-discrete classes based on percentile breaks:   
       
    1. Very Low
    2. Low
    3. Moderate
    4. High
    5. Very High  

   From the metadata: WHP is an index that quantifies the relative potential for wildfire that may be difficult to control, used as a measure to help prioritize where fuel treatments may be needed.  

   This data won't be displayed on the final map, it will simply be used as an input to define and refine communities that should be further analyzed based on their proxitmity to Wildfire Hazard Potential.

2. [U.S. Census Designated Places](https://www2.census.gov/geo/tiger/GENZ2020/shp/cb_2020_us_place_500k.zip). These are simplified representations of selected geographic areas from the U.S. Census Bureau's Master Address File / Topologically Integrated Geographic Encoding and Referencing (MAF/TIGER) Database (MTDB). These boundary files are specifically designed for small-scale thematic mapping.  

    This dataset will be the core spatial component of this project and will be repressented in the final product as graduated symbols based on the geometric center of the polygon at max scale and when zoomed in the map will display the full geometry of the polygon. These data will be loaded into the map as geoJSON files.

3. [U.S. Census American Community Survey](https://www.census.gov/programs-surveys/acs/data.html). Tabular data that will be joined to the final results of overlaying WHP and CDPs. This data will be analyzed and used to develop the vulnerability index described above. At this point I have only acquired tabular data on housing status, I still need to sort through American Community Survey (ACS) tables to acquire additional datasets that will be used to create the vulnerability index. 


    



