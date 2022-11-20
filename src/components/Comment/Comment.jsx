import React from "react";


const Comment = () =>{
    return (
        <>
            <section class="default-section comment-review-tab bg-grey v-pad-remove wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                <div class="container">
                    <div class="tab-part">
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation">
                                <a href="#description" aria-controls="description" role="tab" data-toggle="tab">Description</a>
                            </li>
                            <li role="presentation" class="active">
                                <a href="#reviews" aria-controls="reviews" role="tab" data-toggle="tab">Reviews ( 5 )</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane" id="description">
                                <div class="title text-left">
                                    <h3 class="text-coffee">Description About Product</h3>
                                </div>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                            </div>
                            <div role="tabpanel" class="tab-pane active" id="reviews">
                                <div class="title text-center">
                                    <h3 class="text-coffee">2 Comment</h3>
                                </div>
                                <div class="comment-blog">
                                    <div class="comment-inner-list">
                                        <div class="comment-img">
                                            <img src="images/comment-img1.png" alt=""/>
                                        </div>
                                        <div class="comment-info">
                                            <h5>Anna Taylor</h5>
                                            <span class="comment-date">AUGUST 9, 2016 10:57 AM</span>
                                            <p>Aqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                    <div class="comment-inner-list">
                                        <div class="comment-img">
                                            <img src="images/comment-img1.png" alt=""/>
                                        </div>
                                        <div class="comment-info">
                                            <h5>Anna Taylor</h5>
                                            <span class="comment-date">AUGUST 9, 2016 10:57 AM</span>
                                            <p>Aqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                    <div class="title text-center">
                                        <h3 class="text-coffee">Leave a Reply</h3>
                                    </div>
                                    <form class="form" method="post" name="form">
                                        <div class="row">
                                            <div class="col-md-12 col-sm-12 col-xs-12">
                                                <textarea placeholder="Comment"></textarea>
                                            </div>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <input name="txt" placeholder="Name" type="text"/>
                                            </div>
                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                <input name="email" placeholder="Email" type="email"/>
                                            </div>
                                            <div class="col-md-12 col-sm-12 col-xs-12">
                                                <div class="star-review">
                                                    <p>
                                                        <span>Your Rating</span>
                                                        <span class="star-review-customer">
                                                            <a href="#" class="star-1"></a>
                                                            <a href="#" class="star-2"></a>
                                                            <a href="#" class="star-3"></a>
                                                            <a href="#" class="star-4"></a>
                                                            <a href="#" class="star-5"></a>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                                                <input name="submit" value="POST COMMENT" class="btn-main" type="submit"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comment;