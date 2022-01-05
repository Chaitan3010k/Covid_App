import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

import firebase from "firebase";

export default class PostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            light_theme: true,
            post_id: this.props.post.key,
            post_data: this.props.post.value,
            is_liked: false,
            likes: this.props.post.value.likes
        };
    }

    componentDidMount() {
        this.fetchUser();
    }

    likeAction = () => {
        if (this.state.is_liked) {
            firebase
                .database()
                .ref("posts")
                .child(this.state.post_id)
                .child("likes")
                .set(firebase.database.ServerValue.increment(-1));
            this.setState({ likes: (this.state.likes -= 1), is_liked: false });
        } else {
            firebase
                .database()
                .ref("posts")
                .child(this.state.post_id)
                .child("likes")
                .set(firebase.database.ServerValue.increment(1));
            this.setState({ likes: (this.state.likes += 1), is_liked: true });
        }
    };

    render() {
        let post = this.state.post_data
     
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate("PostScreen", post = this.props.post)}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text>{post.author}</Text>
                        </View>
                    </View>
                    <View style={styles.captionContainer}>
                        <Text>
                            {post.caption}
                        </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <TouchableOpacity
                            style={
                                this.state.is_liked
                                    ? styles.likeButtonLiked
                                    : styles.likeButtonDisliked
                            }
                            onPress={() => this.likeAction()}
                        >
                            <Ionicons
                                name={"heart"}
                                size={RFValue(30)}
                            />

                            <Text>
                                {this.state.likes}
                            </Text>
                        </TouchableOpacity>
                    </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#2a2a2a",
        borderRadius: RFValue(20),
        padding: RFValue(20)
    },
    cardContainerLight: {
        margin: RFValue(13),

        backgroundColor: "white",
        borderRadius: RFValue(20),
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: RFValue(0.5),
        shadowRadius: RFValue(5),
        elevation: RFValue(2),
        padding: RFValue(20)
    },
    authorContainer: {
        flex: 0.1,
        flexDirection: "row"
    },
    authorImageContainer: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    profileImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: RFValue(100)
    },
    authorNameContainer: {
        flex: 0.85,
        justifyContent: "center"
    },
    authorNameText: {
        color: "white",
        fontSize: RFValue(20)
    },
    authorNameTextLight: {
        color: "black",
        fontSize: RFValue(20)
    },
    postImage: {
        marginTop: RFValue(20),
        resizeMode: "contain",
        width: "100%",
        alignSelf: "center",
        height: RFValue(275)
    },
    captionContainer: {},
    captionText: {
        fontSize: 13,
        color: "white",
        paddingTop: RFValue(10)
    },
    captionTextLight: {
        fontSize: 13,
        color: "black",
        paddingTop: RFValue(10)
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
    },
    likeButtonLiked: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderRadius: RFValue(30)
    },
    likeButtonDisliked: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderColor: "#eb3948",
        borderWidth: 2,
        borderRadius: RFValue(30)
    },
    likeText: {
        color: "white",
        fontSize: 25,
        marginLeft: 25,
        marginTop: 6
    },
    likeTextLight: {
        fontSize: 25,
        marginLeft: 25,
        marginTop: 6
    }
});
