$(function() {
    var sec;
    var secdif;
    var extractsecdiv;
    var getchap;
    var getsecchapdiv;
    $(document).on("contextmenu", "#sectionbtn", function(e) {
        getsecchapdiv = $(e.currentTarget).closest(".difcol").attr("id").trim(" ");
        getchap = $(e.currentTarget).attr("data-chapt").trim(" ");
        extractsecdiv = $(e.currentTarget).closest(".seccollapse").attr("id").trim(" ");
        sec = $(e.currentTarget).text().trim(" ");
        secdif = $(e.currentTarget).attr("data-diffic").trim(" ");
    });

    $.contextMenu({
        selector: "#sectionbtn",
        callback: function(key, opt) {
            var subject = $(".subtitle").text();
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/deletesection",
                data: {
                    sub: subject,
                    diff: secdif,
                    chapter: getchap,
                    sect: sec
                },
                dataType: "json",
                success: function(data) {
                    if (data.status === "deleted") {
                        $.ajax({
                            type: "POST",
                            url: "http://localhost:3000/checkifdataexists",
                            data: {
                                sub: subject
                            },
                            dataType: "json",
                            success: function(data) {
                                console.log(data);
                                if (data.status === "dataexists") {
                                    $.ajax({
                                        type: "POST",
                                        url: "http://localhost:3000/displaysection",
                                        data: {
                                            subject: subject,
                                            chapter: getchap,
                                            difficulty: secdif
                                        },
                                        dataType: "JSON",
                                        success: function(data) {
                                            if (data.status === "exists") {
                                                console.log("1110")
                                                $("#" + extractsecdiv).html(data.output);
                                                $("#" + extractsecdiv).append(
                                                    ' <br> <a class="btn btn-outline-secondary addxtrasec" id="addsectionbtn" data-dif="' + secdif + '" data-chap="' + getchap + '" data-toggle="collapse" href="#addextrasection" role="button" aria-expanded="false" aria-controls="collapseExample"  style="width: 175px;position: relative;left: 154px;">+</a><br> <div class="additionalsection"  id="addextrasection">  </div>'
                                                );
                                                var exseccollapselist = document.getElementsByClassName(
                                                    "additionalsection"
                                                );
                                                for (var i = 0; i < exseccollapselist.length; i++) {
                                                    exseccollapselist[i].setAttribute("id", "addextrasection" + i);
                                                }
                                                var exseccollapsebtn = document.getElementsByClassName(
                                                    "addxtrasec"
                                                );
                                                for (var i = 0; i < exseccollapsebtn.length; i++) {
                                                    exseccollapsebtn[i].setAttribute(
                                                        "href",
                                                        "#addextrasection" + i
                                                    );
                                                }
                                                var collapselist = document.getElementsByClassName(
                                                    "qaccollapse"
                                                );
                                                for (var i = 0; i < collapselist.length; i++) {
                                                    collapselist[i].setAttribute(
                                                        "id",
                                                        "collapseQac" + i
                                                    );
                                                }
                                                var collapsebtnlist = document.getElementsByClassName(
                                                    "qaccoll"
                                                );
                                                for (var i = 0; i < collapsebtnlist.length; i++) {
                                                    collapsebtnlist[i].setAttribute(
                                                        "href",
                                                        "#collapseQac" + i
                                                    );
                                                }
                                            } else {

                                                $.ajax({
                                                    type: "POST",
                                                    url: "http://localhost:3000/displaychapter",
                                                    data: {
                                                        subject: subject,
                                                        difficulty: secdif
                                                    },
                                                    dataType: "JSON",
                                                    success: function(data) {
                                                        console.log(data);
                                                        if (data.status === "exists") {
                                                            $("#" + getsecchapdiv).html(data.output);
                                                            $("#" + getsecchapdiv).append(
                                                                ' <br> <a class="btn btn-outline-warning addxtrachap" id="addchapterbtn" data-id="' +
                                                                predif +
                                                                '" data-toggle="collapse" href="#addextrachapter" role="button" aria-expanded="false" aria-controls="collapseExample"  style="width: 238px;position: relative;left: 122px;">+</a><br> <div class="additionalchapter"  id="addextrachapter">  </div>'
                                                            );

                                                            var excollapselist = document.getElementsByClassName(
                                                                "addxtrachap"
                                                            );
                                                            for (var i = 0; i < excollapselist.length; i++) {
                                                                excollapselist[i].setAttribute("href", "#addextrachapter" + i);
                                                            }
                                                            var excollapsebtn = document.getElementsByClassName(
                                                                "additionalchapter"
                                                            );
                                                            for (var i = 0; i < excollapsebtn.length; i++) {
                                                                excollapsebtn[i].setAttribute("id", "addextrachapter" + i);
                                                            }

                                                            var collapselist = document.getElementsByClassName(
                                                                "seccollapse"
                                                            );
                                                            for (var i = 0; i < collapselist.length; i++) {
                                                                collapselist[i].setAttribute(
                                                                    "id",
                                                                    "collapseSection" + i
                                                                );
                                                            }
                                                            var collapsebtnlist = document.getElementsByClassName(
                                                                "sectioncoll"
                                                            );
                                                            for (var i = 0; i < collapsebtnlist.length; i++) {
                                                                collapsebtnlist[i].setAttribute(
                                                                    "href",
                                                                    "#collapseSection" + i
                                                                );
                                                            }
                                                        } else {
                                                            console.log("1151");
                                                            $.ajax({
                                                                type: "POST",
                                                                url: "http://localhost:3000/displaydifficulty",
                                                                data: {
                                                                    sub: $(".subtitle").text()
                                                                },
                                                                dataType: "JSON",
                                                                success: function(data) {
                                                                    if (data.status === "exists") {
                                                                        console.log("1160");
                                                                        $(".retall").html(data.output);
                                                                        var collapselist = document.getElementsByClassName(
                                                                            "collapse"
                                                                        );
                                                                        for (
                                                                            var i = 0; i < collapselist.length; i++
                                                                        ) {
                                                                            collapselist[i].setAttribute(
                                                                                "id",
                                                                                "collapseExample" + i
                                                                            );
                                                                        }
                                                                        var collapsebtnlist = document.getElementsByClassName(
                                                                            "abc"
                                                                        );
                                                                        for (
                                                                            var i = 0; i < collapsebtnlist.length; i++
                                                                        ) {
                                                                            collapsebtnlist[i].setAttribute(
                                                                                "href",
                                                                                "#collapseExample" + i
                                                                            );
                                                                        }
                                                                    } else {
                                                                        $(".retall").html(" ");
                                                                    }
                                                                }
                                                            });
                                                        }
                                                    }
                                                });
                                            }
                                        }
                                    });
                                } else {
                                    $.ajax({
                                        type: "GET",
                                        url: "http://localhost:3000/displaysubjectcard",
                                        dataType: "JSON",
                                        success: function(data) {
                                            if (data.status === "exists") {
                                                $(".displaysubjects").html(data.output);
                                            } else {
                                                $(".retall").html(" ");
                                                $(".displaysubjects").html(data.message);
                                            }
                                        }
                                    });
                                }
                            }
                        });
                    }
                }
            });
        },
        items: {
            delete: {
                name: "Delete",
                icon: "delete",

            }
        }
    });
})