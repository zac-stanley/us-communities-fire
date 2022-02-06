# United States Communities in Harms Way:
## **Where are the Vulnerable in Relation to Wildfire Hazards**  
### *DRAFT* Project Description
This project will attempt to visualize vulnerable communities throughout the United States that are at particular risk to wildfire. It will do so through *spatial analysis* and development of an interactive *web mapping application*.  

The *spatial analysis* component will first look at 2020 wildfire Hazard Potential for the United States as the initial metric - areas with moderate to very high fire risk will determine what communities are futher analyzed. The results of this will then be intersected to [U.S. Census Designated Places](https://www2.census.gov/geo/tiger/GENZ2020/shp/cb_2020_us_place_500k.zip) \(cdps\) polygons \(I need research an appropriate buffer distance that takes into account how far a fire can spread, or if the there is a recommeneded distance at which communities are evacuated). The cdps will be joined to a series of statistics likely including: housing status \(rent or own\), car ownership, age \(senior or child\), education, poverty rate, disability rate, language barriers, incarceration rate. These metrics will be combined to create a vulberability index by which communities can be ranked.  

The results of the *spatial analysis* will be visualized using a couple of different javascript libraries most likely Leaflet and D3, possibly Mapbox as well. The map will focus on vulnerable communities and their vulnerability score index value. Map will likely be represented at full zoom scale as bi-variate with graduated symbol size representing vulnerability index score and the color representing wildfire hazard potential (moderate to very high). Some potential interactivity will include clicking on a community that triggers zooming to it, this will also trigger a popup describing both the wildfire risk to the community along with the individual score that macke up the vulnerability index as described above. While examining the same community there would be a chart in the sidebar comparing the individual metrics that comprise the vulnerability index compared with state or national averages ex. rate of disable folks in community vs. those at the state level \(this idea needs to fleshed out more\).  

Some of the initial thinking for this project was inspired by [Community Wildfire Prevention & Mitigation Report](https://www.fire.ca.gov/media/5584/45-day-report-final.pdf) ordered the by California Governors Office. What the the report lacks however, is a more general approach that is led by fire risk data that includes a national approach not just CalFIRE state responsibility areas (SRAs). The methodology set out in the report uses priority treatment projects as a starting point and uses fire risk data and community vulnerability to help justify those projects. The intent of this project will be to have wildfire hazard data drive where additional community vulnerability needs should be examined and assessed. 

In addition to helping locate areas where fuel treatment could occur there are myriad other potential benefits that could result from this project. To name a few: potential grants for low-income families to get monies to help with brush clearing on their properties, emergency notification/evacuations orders communicated in languages other than english spoken in a community, establishing early evacuation lists of residents with disabilities and those without access to their own transportation among others.

### State of the Data
There are two key datasets that will be used to perform analysis and visualize the results.

1. [2020 wildfire Hazard Potential for the United States](https://www.fs.usda.gov/rmrs/datasets/wildfire-hazard-potential-united-states-270-m-version-2020-3rd-edition). This is a 270-m spatial resolution raster dataset that classifies Wildfire Hazard Potential in the conterminous United States into 5-discrete classes based on percentile breaks:   
       
    1. Indented item
    1.  Very Low
    2.  Low
    3.  Moderate
    4.  High
    5.  Very High  

   From the metadata: WHP is an index that quantifies the relative potential for wildfire that may be difficult to control, used as a measure to help prioritize where fuel treatments may be needed.  

    



