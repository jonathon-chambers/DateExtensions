/**
 * Current Quarter methods
 */

/**
 * @description Start of dates month
 * @return {Date}  Start date of month
 */
Date.prototype.startOfMonth = function() {
    return new Date(this.getFullYear(), this.getMonth(), 1);
};

/**
 * @description End of dates month
 * @return {Date} End date of month
 */
Date.prototype.endOfMonth = function() {
    return new Date(this.getFullYear(), this.getMonth() + 1, 0);
};

/**
 * @description Current quarter
 * @return {Int} Current quarter
 */
Date.prototype.currentQ = function() {
    return Math.ceil(((this.getMonth() + 1) / 12) * 4);
};

/**
 * @description First month of current quarter
 * @return {Int} The integer value of the the first month of the quarter
 */
Date.prototype.firstMonthOfQ = function() {
    return (this.currentQ() * 3) - 3;
};

/**
 * @description Last month of current quarter
 * @return {Int} The integer value of the last month of the quarter
 */
Date.prototype.lastMonthOfQ = function() {
    return (this.currentQ() * 3) - 1;
};

/**
 * @description Start date of the current quarter
 * @return {Date} Start date of current quarter
 */
Date.prototype.startOfQ = function() {
    return new Date(this.getFullYear(), this.firstMonthOfQ(), 1);
};

/**
 * @description End date of the current quarter
 * @return {Date} End date of current quarter
 */
Date.prototype.endOfQ = function() {
    return new Date(this.getFullYear(), this.firstMonthOfNextQ(), 0);
};

/**
 * Next Quarter methods
 */

/**
 * @description Start date of next quarter
 * @return {Date} Start date of next quarter
 */
Date.prototype.startOfNextQ = function() {
    return new Date(this.getFullYear(), this.firstMonthOfNextQ(), 1);
};

/**
 * @description Start date of next quarter
 * @return {Date} End date of next quarter
 */
Date.prototype.endOfNextQ = function() {
    return new Date(this.getFullYear(), this.startOfNextQ().firstMonthOfNextQ(), 0);
};

/**
 * @description First month of the next quarter
 * @return {Int} The integer value of the first month of the next quarter
 */
Date.prototype.firstMonthOfNextQ = function() {
    return this.currentQ() * 3;
};

/**
 * Last Quuarter methods
 */

/**
 * @description Start date of last quarter
 * @return {Date} Start date of last quarter
 */
Date.prototype.startOfLastQ = function() {
    return this.endOfLastQ().startOfQ();
};

/**
 * @description End date of last quarter
 * @return {Date} End date of last quarter
 */
Date.prototype.endOfLastQ = function() {
    return new Date(this.startOfQ() - 1);
};

/**
 * Quarter helper methods
 */

/**
 * @description Pretty string version of the current quarter and year
 * @return {String} String of Quarter and year
 */
Date.prototype.prettyQYear = function() {
    return `Q${this.currentQ()} ${this.getFullYear()}`;
};

/**
 * @description Pretty string version of the current quarter
 * @return {String} String of Quarter
 */
Date.prototype.prettyQ = function() {
    return `Q${this.currentQ()}`;
}
