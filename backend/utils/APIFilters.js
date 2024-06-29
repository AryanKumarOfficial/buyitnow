class APIFilters {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: 'i'
            }
        } : {};
        this.query = this.query.find({ ...keyword });
        return this;
    }

    filter() {
        const queryCopy = { ...this.queryStr };
        const removeFields = ['keyword', 'limit', 'page'];
        removeFields.forEach((el) => delete queryCopy[el]);

        let output = {};

        for (let key in queryCopy) {
            if (!key.match(/\b(gte|gt|lte|lt)\b/)) {
                output[key] = queryCopy[key];
            } else {
                const [field, operator] = key.split('[');
                const op = operator.replace(']', '');
                if (!output[field]) {
                    output[field] = {};
                }
                output[field][`$${op}`] = queryCopy[key];
            }
        }
        this.query = this.query.find(output);
        return this;
    }

    paginate(resPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resPerPage * (currentPage - 1);

        this.query = this.query.limit(resPerPage).skip(skip);
        return this;
    }
}

export default APIFilters;
