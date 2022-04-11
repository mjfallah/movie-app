import React, { useContext } from "react";
import ReactTooltip from "react-tooltip";

import { PostInformation } from "./PostContextProvider";

import styles from "./Posts.module.css";

const Posts = () => {
  const posts = useContext(PostInformation);

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={ `postItem ${styles.post}`}>
          <div className={styles.infoAndImage}>
            <div className={styles.imageAndBadge}>
              <a href="/">
                <img src={post.image} alt="poster" />
                {post.isDubbed && (
                  <div className={styles.dubbBadge}>
                    <i className="fas fa-microphone"></i>
                    دوبله فارسی
                  </div>
                )}
              </a>
              {post.isForcedSubtitle && (
                <div className={styles.badge}>
                  <span>
                    همراه با زیرنویس چسبیده
                    <b>
                      <i className="fas fa-check"></i>
                    </b>
                  </span>
                </div>
              )}
              {!!post.imdb.top250Imdb && (
                <div className={styles.imdbBadge}>
                  <span>
                    جز 250 {post.category} imdb با رتبه
                    <b>{post.imdb.top250Imdb}</b>
                  </span>
                </div>
              )}
            </div>
            <div className={styles.titleContainer}>
              <div className={styles.title}>
                <div className="postTitle">
                  {post.category === "فیلم" ? (
                    <i className="fas fa-film fa-xl"></i>
                  ) : (
                    <i className="fas fa-tv fa-xl"></i>
                  )}
                  <h2>
                    <a href="/" className="postTitle">
                      دانلود {post.category} {post.title}
                    </a>
                  </h2>
                </div>
                <div>
                  <div className={styles.bookmark}>
                    <a
                      data-tip="افزودن به لیست تماشا"
                      data-for="bookmark"
                      href="/"
                    >
                      <i className="fas fa-bookmark"></i>
                    </a>
                    <ReactTooltip
                      place="right"
                      id="bookmark"
                      type="light"
                      effect="solid"
                      offset={{ left: -7 }}
                      border
                      borderColor="black"
                    />
                  </div>
                  <div className={styles.rating}>
                    <strong data-tip="رده سنی" data-for="rating">
                      {post.rating}
                    </strong>
                    <ReactTooltip
                      place="right"
                      id="rating"
                      type="light"
                      effect="solid"
                      border
                      borderColor="black"
                    />
                  </div>
                </div>
              </div>
              <div>
                <ul className={styles.infos}>
                  <li className={styles.imdb}>
                    <a href="/">
                      <span>
                        <i className="fab fa-imdb fa-2x"></i>
                      </span>
                      <span>{post.imdb.rate}</span>
                      <span className="postTitle">از میانگین رأی</span>
                      <span>{post.imdb.votesCount.toLocaleString()}</span>
                      <span className="postTitle">نفر</span>
                    </a>
                  </li>
                  <li className={styles.quality}>
                    <strong>کیفیت</strong>
                    <span className="postTitle">{post.quality}</span>
                  </li>
                  <li className={styles.item}>
                    <strong> ژانر </strong>
                    {post.genres.map((genre) => (
                      <a href="/" key={post.id * (19 * Math.random())}>
                        {genre}{" "}
                      </a>
                    ))}
                  </li>
                  <li className={styles.item}>
                    <strong>سال انتشار</strong>
                    <a href="/">{post.releaseYear}</a>
                  </li>
                  {post.episodeLength && (
                    <li className={styles.item}>
                      <strong>مدت زمان هر قسمت</strong>
                      <a href="/">{post.episodeLength} دقیقه </a>
                    </li>
                  )}
                  {post.airSituation && (
                    <li className={styles.item}>
                      <strong>وضعیت پخش </strong>
                      {post.airSituation === "finished" && (
                        <a href="/">به اتمام رسیده </a>
                      )}
                      {post.airSituation === "onAir" && (
                        <a href="/">در حال پخش </a>
                      )}
                    </li>
                  )}
                  {post.airSituation && (
                    <li className={styles.item}>
                      <strong>سال های پخش </strong>
                      <a href="/">{post.releaseYear}</a>-
                      <a href="/">{post.lastSeasonYear}</a>
                    </li>
                  )}
                  <li className={styles.item}>
                    <strong> محصول </strong>
                    {post.producerCountries.map((item) => (
                      <a href="/" key={post.id * (19 * Math.random())}>
                        {item}{" "}
                      </a>
                    ))}
                  </li>
                  <li className={styles.item}>
                    <strong>کارگردان</strong>
                    <a href="/">{post.director}</a>
                  </li>
                  <li className={`${styles.item} ${styles.actors}`}>
                    <strong> بازیگران </strong>
                    {post.actors.map((actor) => (
                      <a href="/" key={post.id * (19 * Math.random())}>
                        {actor}{" "}
                      </a>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.summary}>
            <p className="postTitle">
              <i className="fas fa-comment-dots"></i>
              <span className="postTitle"> خلاصه داستان : </span>
              {post.summary}
            </p>
          </div>
          {post.update && (
            <div className={styles.update}>
              <i className="fas fa-bell"></i>
              <span> {post.update} </span>
            </div>
          )}
          <div className={styles.footer}>
            <div className={styles.dateAndComment}>
              <span className="postTitle">
                <i className="fas fa-calendar-alt"></i> {post.postingDate}
              </span>
              <span className="postTitle">
                <i className="far fa-comment"></i> {post.commentsCount} دیدگاه{" "}
              </span>
            </div>
            <button>
              <a href="/">ادامه مطلب و دانلود</a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
