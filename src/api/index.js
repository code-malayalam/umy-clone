import coursesMeta from '../stub/coursesMeta.json';
import discussions from '../stub/discussions.json';
import notes from '../stub/notes.json';
import myCourses from '../stub/myCourses.json';
import _ from 'lodash';


const getChapterMetaWithId = () => {
    return Promise.resolve(coursesMeta[0]);
    
};

const getCourseMeta = () => {
    const vals  =_.groupBy(coursesMeta, (item) => {
        if(myCourses.indexOf(item.id) !== -1) {
            return 'ours';
        }
        return item.price ? 'all' : 'free';
    });
    console.log(vals);
    return Promise.resolve(vals);
}

const getDiscussions = () => {
    return Promise.resolve(discussions);
}

const getNotes = () => {
    return Promise.resolve(notes);
}

export {
    getChapterMetaWithId,
    getDiscussions,
    getNotes,
    getCourseMeta
};
