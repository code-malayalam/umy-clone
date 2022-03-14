import videoMeta from '../stub/videoMeta.json';
import coursesMeta from '../stub/coursesMeta.json';
import chapterMeta from '../stub/chapterMeta.json';
import discussions from '../stub/discussions.json';
import notes from '../stub/notes.json';

const getVideoMeta = () => {
    return Promise.resolve(videoMeta);
};

const getCoursesMeta = () => {
    return Promise.resolve(coursesMeta);
};

const getChapterMeta = () => {
    return Promise.resolve(chapterMeta);
};

const getDiscussions = () => {
    return Promise.resolve(discussions);
}

const getNotes = () => {
    return Promise.resolve(notes);
}

export {
    getVideoMeta,
    getCoursesMeta,
    getChapterMeta,
    getDiscussions,
    getNotes
};
