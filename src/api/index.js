import coursesMeta from '../stub/coursesMeta.json';
import discussions from '../stub/discussions.json';
import notes from '../stub/notes.json';
import myCourses from '../stub/myCourses.json';
import _ from 'lodash';

const getChapterMetaWithId = (id) => {
    const chapters = coursesMeta.find((item) => {
        return item.id === id;
    });
    return Promise.resolve(chapters);
};

// Without id
const getChapterMeta = (id) => {
    const chapters = coursesMeta.find((item) => {
        return item.id === id;
    });
    return Promise.resolve(chapters);
};

const getMyCourses = () => {
    return Promise.resolve(myCourses);
}

const getCourseMeta = () => {
    const vals  =_.groupBy(coursesMeta, (item) => {
        if(myCourses.indexOf(item.id) !== -1) {
            return 'ours';
        }
        return item.price ? 'all' : 'free';
    });
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
    getCourseMeta,
    getChapterMeta,
    getMyCourses
};
