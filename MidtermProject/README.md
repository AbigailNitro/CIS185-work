# Project Name: SALVAGE LABS WIKI
        ## CIS 185 - Midterm Project
        ## Author: Abigail Hitchcock
        ## Date: 11/13/25

        ---

        ## 1. Project Description
        This is a wiki of an ARG project, Salvage labs. The main purpose is to
        act as a written archive of story content.

        ## 2. Target Audience
        New and old fans of Salvage Labs, so they can get caught up or review lore 

        ## 3. Main Features
        landing page with basic synopsis, character type pages, pages for individual characters. 
        due to the amount of info involved in each character, only N and Aqua have character pages.
        furthermore, only aqua has info about her story

        ## 4. Technologies Used
        html-basic structure, css for grid system/slideshows, js for slideshows and questionaire

        ## 5. File Structure
        Since theres a lot of pages here, I had to use folders to keep it compact. I used
        capital letters for the folders to keep it seperate from the files. as for the overall
        structure i figured leaving the styles closer to the root would make it easier since i
        can just move up 1-2 folders in my filepath 
        the character images are set to (charactername) + (number) so that the slideshow script
        can work for ANY character, provided it's set up properly.

        ## 6. Challenges Faced
        getting the grid system for the character cards took a minute, specifically
        with getting the empty space, as my unusual formatting kept making it a 
        large box rather than a rectangle. mainly caused by a minor error in the css.
        the slideshow took forever to figure out because you need to use .json files
        to get access to JS file systems, so i had to rework it by using classes to define
        how many images were present.


        ## 7. AI Tools Used
        I used chatGPT one time to check a problem i was having with the grid box, turns out
        I messed up on the quotes. google ai gave me the syntax for fs.existsSync (which i didnt use).

        ## 8. Future Improvements
        Finish all the character pages. (will likely happen because the community needs a wiki)

        ## 9. Credits
        -All images from @Shr00msi3 on twitter 
        -class materials used
        tutorials used:
        https://www.w3schools.com/howto/howto_css_dropdown.asp
        https://www.w3schools.com/howto/howto_js_slideshow.asp