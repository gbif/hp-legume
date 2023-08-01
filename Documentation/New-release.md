# How to realease a new version of the Legume Data Portal

When you are ready to launch a new public release of the Legume Data Portal:
- Go to https://github.com/gbif/hp-legume
- Click on 'Release' on the right of the page
- The new page lists all the previous releases of the Portal
- Click on 'Draf a New Release' on the top-right part of the page
- In the new page, click on 'Choose a tag', and create a new tag following these rules:
	- If this is a minor release (new News item, correction of typos, small modification of texts, etc), increment the last digit of the last tag by one (example: v.1.3.13 to v.1.3.14)
	- If this is a medium realease (new pages, new sections, new tools), increment the middle digit by one (example: v.1.3.13 to v.1.4.0)
	- If this is a major release (big changes in taxonomy, complete revamp of Portal), increment the first digit by one (example: v.1.13.3 to v.2.0.0)
- Click on '+ Create a new tag', once you have typed the new tag
- Add an informative but short title
- In the 'Describe this release', give more information about what has changed. No need to list all the small changes, but at least the more important ones.
- Click on 'Set as the latest release' (if not already selected). It is also possible to do a pre-release, but we usually select the other option.
- If you want the launch the new version of the Portal right away, click on 'Publish Release'. If you want to wait before releasing a new version, click on 'Save draft'.
- You will be sent back to the page with the list of previous release.
- Be patient! It takes a little bit of time to build the Portal. You can check the status here: https://builds.gbif.org/job/hp-legume/
- Share with your colleagues and the world how the Legume Data Portal is awesome.
