var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Parent Class
var Students = /** @class */ (function () {
    function Students(name, age, nationality) {
        this.Name = name;
        this.Age = age;
        this.Gender = 'female';
        this.Nationality = nationality;
    }
    Students.prototype.getNationality = function () {
        return this.Nationality;
    };
    return Students;
}());
var UGStudents = /** @class */ (function (_super) {
    __extends(UGStudents, _super);
    function UGStudents(name, age, nationality, batch, gpa) {
        var _this = _super.call(this, name, age, nationality) || this;
        _this.Batch = batch;
        _this.GPA = gpa;
        return _this;
    }
    UGStudents.prototype.getBatch = function () {
        return this.Batch;
    };
    return UGStudents;
}(Students));
var newUG = new UGStudents('Jill', 66, 'Canada', 1, 2.0);
console.log("nationality: " + newUG.getNationality());
