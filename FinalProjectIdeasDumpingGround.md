# California Communities in Harms Way:
## **Where are the vulnerable in relation to fire risk**  

1. #### What questions need to be answered before zeroing in on data?
    - do we want to consider the after fire effects i.e. if people rent and they lose their home will they have to move and what are the long term effects of that? housing status and quality of? Could be in write-up.
    - what about tribes? Does the census even count them? address in write up

2. #### Methodology
     - **Vulberability Index - value will get a 1 if percentage is greater than the national average, zero if below.
     - If using raster for fire probability convert pixels to points?
     - use some undetermined method to come up with a vulnerability score/index for census designated places being vulnerable
        - *something like above average population of renters, access to transportation, age \(old and young\), education, above average poverty, disabilities in a household, mental illness, language barriers \(primary language spoken in households, can't understand evacuation warnings etc.\), those who have been incarcerated*
            - this will require literature review  
            - what other factors should be included in score 
    - Assigning WHP to CDPs - 
         1. convert to polygon w/ classes 3, 4, and 5 to polygons - TEST DONE
         2. Project data to albers equal area conic north america - TEST DONE
         3. Intersect with CDPs - TEST DONE
         4. Calculate acres - TEST DONE
         5. Get acres by CDP and whp class by dissolving on CDP name and whp class and acres sum - TEST DONE
         6. DROP duplicate and keep highest value in different column - https://stackoverflow.com/questions/12497402/remove-duplicates-by-columns-a-keeping-the-row-with-the-highest-value-in-column/13059751#13059751
            - Tested in ArcGIS Pro with summary statistics: https://gis.stackexchange.com/questions/152106/what-tool-would-be-best-for-getting-the-max-value-out-of-identical-id-rows
         7. Max acres will resuls in the the WHP value being assigned to CDP
    - buffers aroudn cdps - research an appropriate buffer distance that takes into account how far a fire can spread. The 900 m smoothing distance is consistent with work by Caggiano et al. \(2020\) showing that all home losses to wildfire from 2000 to 2018 were within 850 m of wildland vegetation
        -  at what distance do evacuation warnings take place?
        - analysis, particularly bufffering needs to be done with an equal area projection

2. #### Vulnerability Brain Dump
      - The World Health Organization defines vulnerable as “… the degree to which a population, individual or organization is unable to anticipate, cope with, resist and recover from the impacts of disasters.
      -  Centers for Disease Control and Prevention (CDC) states that vulnerable populations may include anyone who has difficulty communicating, has difficulty accessing medical care, may need help maintaining independence, requires constant supervision, or may need help accessing transportation.
      - One that won't be in census data *social realm, vulnerable populations include those living in abusive families, the homeless, immigrants, and refugees*
        - this can maybe be addressed in my write up
3. #### For collecting Cenus Tabular Data
      - filter by, US, All places and year is 2019
4. #### Calculations that need to be made from raw census data to develop vulnerability index: 
      - poverty rate  - based on median earnings compared to national average
      



