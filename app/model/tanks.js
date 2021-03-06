module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const TanksSchema = new Schema({
        _id: { type: Number },
        rank: { type: Number },
        rank_delta: { type: Number, default: 0 },
        nation: { type: String },
        type: { type: String },
        role: { type: String },
        tier: { type: Number },
        name: { type: String },
        en_name: { type: String },
        short_name: { type: String },
        en_short_name: { type: String },
        tech_name: { type: String },
        premium: { type: Number },
        collector_vehicle: { type: Number },
        tank_icon: { type: String },
        mastery_65: { type: Number },
        mastery_85: { type: Number },
        mastery_95: { type: Number },
        insert_date: { type: Date },
        update_date: { type: Date },
    }, { collection: 'all_tanks' });

    return mongoose.model('all_tanks', TanksSchema);
}