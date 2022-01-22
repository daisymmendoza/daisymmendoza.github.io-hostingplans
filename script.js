// Hosting Plan
function Plan(name, price, space, transfer, pages, discountMonths) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
    this.calcAnnual = function (percentIfDisc) {
        var bestPrice = this.price;
        var currDate = new Date();
        var thisMo = currDate.getMonth();

        for (var i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] === thisMo) {
                bestPrice = this.price * percentIfDisc;
                var calc = (1 - percentIfDisc) * 100;
                document.getElementById("total").innerHTML = "Total: $" + bestPrice * 12;
                document.getElementById("disc").innerHTML = "Discount: " + calc;
            } else {
                document.getElementById("total").innerHTML = "Total: $" + price * 12;
                document.getElementById("disc").innerHTML = "Discount: None";
            }
        }
        return bestPrice * 12;
    }
    this.summary = function () {
        document.getElementById("planName").innerHTML = "Plan: " + this.name;
        document.getElementById("cost").innerHTML = "Price: $" + this.price;
    }
};

// Plans
var basic = new Plan("Basic", 3.99, 100, 1000, 10, [6, 7]);
var prof = new Plan("Professional", 5.99, 500, 5000, 50, [6, 7, 11]);
var ult = new Plan("Ultimate", 9.99, 2000, 20000, 500, [6, 7]);

// Custom plan form validation
function validation() {
	var mname=document.custom.mname;
	var space=document.custom.space;
	var data=document.custom.data;
	var spname=document.custom.spname;

	if(monthselect(mname)) {
		if(spaceselect(space)) {
			if(dataselect(data)) {
				if(spselect(spname)) {
				}
			}
		}
	}
	cstmPlan();
    /* return false; */
}	

function monthselect(mname) {
	if(mname.value == "Default") {
		alert('Please select your preferred number of months');
		mname.focus();
		return false;
	} else {
		return true;
	}
}

function spaceselect(space) {
	if(space.value == "Default") {
		alert('Please select your preferred number of disk space');
		space.focus();
		return false;
	} else {
		return true;
	}
}

function dataselect(data) {
	if(data.value == "Default") {
		alert('Please select your preferred number of data transfer');
		data.focus();
		return false;
	} else {
		return true;
	}
}

function spselect(spname) {
	if(spname.value == "Default") {
		alert('Please select your preferred number of site pages');
		spname.focus();
		return false;
	} else {
		return true;
	}
}

// Custom plan (cart)
function cstmPlan() {
    var months = mname.value;
    var cstmCost = 7.99;

    document.getElementById("planName").innerHTML = "Plan: Custom";
    document.getElementById("cost").innerHTML = "Price: $7.99";
    document.getElementById("disc").innerHTML = "Discount: None";
    document.getElementById("total").innerHTML = "Total: $" + cstmCost * months;
}

// Checkout side bar
function openCheck() {
    document.getElementById("myCheckbar").style.width = "250px";
}

function closeCheck() {
    document.getElementById("myCheckbar").style.width = "0";
}