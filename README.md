# United States Communities in Harms Way:
## **Where are the vulnerable in relation to fire risk**  
This project will attempt to visualize vulnerable communities throughout the United States that are at particular risk to wildfire. It will do so through *spatial analysis* and *web development*.  

The *spatial analysis* component will first look at [2020 wildfire Hazard Potential for the United States](https://www.fs.usda.gov/rmrs/datasets/wildfire-hazard-potential-united-states-270-m-version-2020-3rd-edition) as the initial metric - areas with moderate to very high fire risk will determine what communities are futher analyzed. The results of this will then be intersected to   [U.S. Census designated places](https://www2.census.gov/geo/tiger/GENZ2020/shp/cb_2020_us_place_500k.zip) \(cdps\) polygons \(I need research an appropriate buffer distance that takes into account how far a fire can spread. The 900 m smoothing distance is consistent with work by Caggiano et al. \(2020\) showing that all home losses to wildfire from 2000 to 2018 were within 850 m of wildland vegetation\). The cdps will be joined to a series of statistics likely including: housing status \(rent or own\), car ownership, age \(senior or child\), education, poverty rate, disability rate, language barriers, incarceration rate. These metrics will be combined to create a vulberability index by which communities can be ranked.  

The results of the spatial analysis will be visualized using a couple of different javascript libraries most likely Leaflet and D3, possibly Mapbox as well. The map will focus on vulnerable communities and their vulnerability score index value. Map will likely be represented at full zoom scale as a bi-variate with graduated symbol size representing vulnerability index score and the color representing wildfire hazard potential. Some potential interactivity will include clicking on a community that triggers zooming to it, this will also trigger a popup describing both the wildfire risk to the community along with the vulnerability index as described above. While examining the same community there would be a chart in the sidebar comparing the individual metrics that comprise the vulnerability index compared with state averages ex. rate of disable folks in community vs. those at the state level \(this idea needs to fleshed out more\).  

Some of the initial thinking for this project was inspired by [Community Wildfire Prevention & Mitigation Report](https://www.fire.ca.gov/media/5584/45-day-report-final.pdf) ordered the by California Governors Office. What the the report lacks however, is a more general approach that is led by fire risk data that includes all lands in California not just CalFIRE state responsibility areas (SRAs). The methodology set out in the report uses priority treatment projects as a starting point and uses fire risk data and community vulnerability to help justify those projects. The intent of this project will be to have wildfire risk data drive where additional community vulnerability needs should be examined. The results could then be used as a way to drive where fuel treatment projects should be prioritized. 

In addition to helping locate areas where fuel treatment could occur there are myriad other potential benefits that could result from this project. To name a few: potential grants for low-income families to get monies to help with brush clearing on their properties, emergency notification/evacuations orders communicated in dominant languages of a community, establishing emergency pickup locations for residents without cars, those with disabilities or those who otherwise can't drive. 

I want to design a map that allows the vizualization of high burn probability locations and vulnerable populations in the state of California. I would like to map this topic because it has the potential identify geographies that are particularly at risk from both a natural resource perspective but also from a human one, and that convergence could be more meaningful than either of those factors on their own. I think this could be a particularly helpful tool for policy makers and resource managers in helping them plan fuel treatments, whether certain social services may be required (rides for the disabled in an emergency etc.) fire mitigation strategies and simply where need is greatest.  




