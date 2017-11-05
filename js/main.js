function fade($ele) {
    $ele.fadeIn(2800).delay(3300).fadeOut(2800, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
   });
}
fade($('.quoteLoop > .quote').first());

const persons = [
  {
    name: "Amber Gibs",
    photo: "http://www.designskilz.com/random-users/images/imageF50.jpg",
    title: "Developer",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
    social: {
      facebook: "#",
      twitter: "https://twitter.com/knyttneve",
      linkedin: "#"
    }
  },
  {
    name: "Carl Roland",
    photo: "http://www.designskilz.com/random-users/images/imageM33.jpg",
    title: "Developer",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
    social: {
      facebook: "#",
      twitter: "https://twitter.com/knyttneve",
      linkedin: "#"
    }
  },
  {
    name: "Paul Wilson",
    photo: "http://www.designskilz.com/random-users/images/imageM11.jpg",
    title: "UI Designer",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
    social: {
      facebook: "#",
      twitter: "https://twitter.com/knyttneve",
      linkedin: "#"
    }
  },
  {
    name: "Alice Jenkins",
    photo: "http://www.designskilz.com/random-users/images/imageF38.jpg",
    title: "QA Engineer",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
    social: {
      facebook: "#",
      twitter: "https://twitter.com/knyttneve",
      linkedin: "#"
    }
  }
];

const app = new Vue({
  el: "#app",
  data() {
    return {
      persons: persons,
      selectedPersonIndex: null,
      isSelected: false,
      selectedPerson: null,
      inlineStyles: null,
      isReady: false,
      isOk: false,
      selectedPersonData: {
        name: null,
        title: null,
        photo: null,
        social: {
          facebook: null,
          twitter: null,
          linkedin: null
        }
      }
    };
  },
  methods: {
    selectPerson(index, el) {
      if (!this.isOk) {
        this.selectedPersonIndex = index;
        this.isSelected = true;
        el.target.parentElement.className == "person-details"
          ? (this.selectedPerson = el.target.parentElement.parentElement)
          : (this.selectedPerson = el.target.parentElement);

        this.selectedPerson.classList.add("person-selected");
        this.selectedPerson.setAttribute(
          "style",
          `width:${this.selectedPerson.offsetWidth}px;`
        );
        this.selectedPersonData = this.persons[index];
        window.setTimeout(() => {
          this.inlineStyles = `width:${this.selectedPerson
            .offsetWidth}px;height:${this.selectedPerson
            .offsetHeight}px;left:${this.selectedPerson.offsetLeft}px;top:${this
            .selectedPerson.offsetTop}px;position:fixed`;
          this.selectedPerson.setAttribute("style", this.inlineStyles);
        }, 400);
        window.setTimeout(() => {
          this.isReady = true;
          this.isOk = true;
        }, 420);
      } else {
        this.reset();
      }
    },
    reset() {
      this.isReady = false;
      window.setTimeout(() => {
        this.selectedPerson.classList.add("person-back");
      }, 280);
      window.setTimeout(() => {
        this.selectedPerson.setAttribute("style", "");
      }, 340);
      window.setTimeout(() => {
        this.isSelected = false;
        this.selectedPerson.classList.remove("person-back", "person-selected");
        this.isOk = false;
      }, 400);
    }
  }
});




 $("#batch").hide();
 $("#studentid").hide();
  $("#facultyid").hide();
    $("input[type='radio']").change(function () {

        if ($(this).val() == "student") {
            $("#batch").show();
             $("#facultyid").hide();
            $("#studentid").show();
            
        } else {
            $("#batch").hide();
            $("#facultyid").show();
             $("#studentid").hide();
           
        }
    });

    $("#signupbatch").hide();
    $("#signupstudentid").hide();
    $("#signupfacultyid").hide();
    $("input[type='radio']").change(function () {

        if ($(this).val() == "student") {
            $("#signupbatch").show();
            $("#signupfacultyid").hide();
            $("#signupstudentid").show();
            
        } else {
            $("#signupbatch").hide();
            $("#signupfacultyid").show();
             $("#signupstudentid").hide();
        }
    });

    

    $("#adminsignup").on("click",function()
	{
		console.log("insideconsole");
		var signupForm=$('#adminform');
		var dataString = "action=events&"+signupForm.serialize();
			console.log(dataString);
		if (!signupForm[0].checkValidity()) 
		{
			signupForm[0].reportValidity();
			return;
		}		
		$.ajax (
		{
			type: 'POST',	
			url: 'ajax.php', 
			data: dataString,
			cache: false,
			success: function(result)
			{
				console.log(result);
				show_all_events();
				document.getElementById("adminform").reset();
				document.getElementById("adminmessage").innerHTML=result;
			}	
		});	
	});
