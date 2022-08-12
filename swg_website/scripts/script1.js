
document.getElementById("button0").addEventListener("click", myFunction0);

function myFunction0() {
	var user_data00 = document.getElementById("user_input0").value;

	var update0 = "update0"
	var update1 = "update1"

	var update0_info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque nec. Sit amet purus gravida quis blandit turpis cursus in. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Augue ut lectus arcu bibendum at varius vel pharetra. Turpis massa sed elementum tempus egestas sed sed risus pretium. Turpis massa sed elementum tempus egestas. Non consectetur a erat nam at lectus urna duis convallis. Eu facilisis sed odio morbi quis. Auctor elit sed vulputate mi sit amet. Cursus mattis molestie a iaculis. At ultrices mi tempus imperdiet nulla. Aliquam eleifend mi in nulla. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Sit amet nulla facilisi morbi. Vitae semper quis lectus nulla. Bibendum ut tristique et egestas quis ipsum."
	
	var update1_info = "lksjadiwjaldkjwalkdjsakjdkawdjijksaldasda"
	var update2_info = "lksjadiwjaldkjwalkdjsakjdkawdjijksaldasda"

  if(user_data00 === update0)
  {
    document.getElementById("output0").innerHTML = "Update0, August 1st 2022." 
    document.getElementById("output01").innerHTML = "Curabitur gravida arcu ac tortor dignissim. At tellus at urna condimentum mattis pellentesque. Habitant morbi tristique senectus et netus et malesuada fames ac. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Nibh venenatis cras sed felis eget velit. Sit amet volutpat consequat mauris nunc congue nisi vitae. Maecenas volutpat blandit aliquam etiam erat. Aliquet risus feugiat in ante. Morbi tristique senectus et netus et malesuada. Tortor id aliquet lectus proin nibh. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nunc congue nisi vitae suscipit tellus. Arcu risus quis varius quam quisque id diam vel. Vitae ultricies leo integer malesuada. Massa eget egestas purus viverra accumsan in. Enim diam vulputate ut pharetra sit. Lacus luctus accumsan tortor posuere ac ut consequat. Velit dignissim sodales ut eu sem integer vitae justo eget. Sed risus ultricies tristique nulla." + update0_info
    document.getElementById("output02").innerHTML = "Curabitur gravida arcu ac tortor dignissim. At tellus at urna condimentum mattis pellentesque. Habitant morbi tristique senectus et netus et malesuada fames ac. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Nibh venenatis cras sed felis eget velit. Sit amet volutpat consequat mauris nunc congue nisi vitae. Maecenas volutpat blandit aliquam etiam erat. Aliquet risus feugiat in ante. Morbi tristique senectus et netus et malesuada. Tortor id aliquet lectus proin nibh. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nunc congue nisi vitae suscipit tellus. Arcu risus quis varius quam quisque id diam vel. Vitae ultricies leo integer malesuada. Massa eget egestas purus viverra accumsan in. Enim diam vulputate ut pharetra sit. Lacus luctus accumsan tortor posuere ac ut consequat. Velit dignissim sodales ut eu sem integer vitae justo eget. Sed risus ultricies tristique nulla."
  }
  if(user_data00 === update1)
  {
    document.getElementById("output0").innerHTML = "Update1, August 12th 2022." 
    document.getElementById("output01").innerHTML = "Aenean et tortor at risus viverra adipiscing at in tellus. Enim ut tellus elementum sagittis vitae et leo duis. Ante in nibh mauris cursus mattis molestie a iaculis at. Eget duis at tellus at urna condimentum mattis. Aliquet sagittis id consectetur purus. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Id eu nisl nunc mi ipsum faucibus. Mauris pellentesque pulvinar pellentesque habitant. Iaculis eu non diam phasellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Tristique sollicitudin nibh sit amet commodo. Vitae aliquet nec ullamcorper sit amet risus nullam. Sit amet nisl suscipit adipiscing bibendum est. In vitae turpis massa sed elementum tempus egestas. Est ultricies integer quis auctor elit sed vulputate mi sit." + update0_info
    document.getElementById("output02").innerHTML = "Aenean et tortor at risus viverra adipiscing at in tellus. Enim ut tellus elementum sagittis vitae et leo duis. Ante in nibh mauris cursus mattis molestie a iaculis at. Eget duis at tellus at urna condimentum mattis. Aliquet sagittis id consectetur purus. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Id eu nisl nunc mi ipsum faucibus. Mauris pellentesque pulvinar pellentesque habitant. Iaculis eu non diam phasellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Tristique sollicitudin nibh sit amet commodo. Vitae aliquet nec ullamcorper sit amet risus nullam. Sit amet nisl suscipit adipiscing bibendum est. In vitae turpis massa sed elementum tempus egestas. Est ultricies integer quis auctor elit sed vulputate mi sit." 
  }
  else if(user_data00 != update0)
  {
    document.getElementById("output0").innerHTML = "No results found.";
    document.getElementById("output01").innerHTML = " "
    document.getElementById("output02").innerHTML = " "
  }
}