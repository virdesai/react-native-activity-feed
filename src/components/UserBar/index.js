// @flow
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Avatar from '../Avatar';
import FollowButton from '../FollowButton';

type Props = {
  onPressAvatar?: () => any,
  data: {
    username: ?string,
    image: ?string,
    handle?: string,
    time: string,
    icon?: string,
  },
  follow?: boolean,
};

const UserBar = ({ data, follow, onPressAvatar }: Props) => {
  const { handle, time, username = 'Unknown', image, icon } = data;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressAvatar}>
        <Avatar source={image} size={48} noShadow />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.username}>{username}</Text>
        <View style={{ flexDirection: 'row' }}>
          {icon !== undefined ? (
            <Image
              source={icon}
              style={{ width: 24, height: 24, top: -2, marginRight: 5 }}
            />
          ) : null}
          {handle && <Text style={styles.handle}>{handle}</Text>}
        </View>
      </View>
      {time && (
        <View>
          <Text style={styles.timestamp}>{time}</Text>
        </View>
      )}
      {follow && (
        <View>
          <FollowButton />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100 + '%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    marginLeft: 10,
    flex: 1,
  },
  username: {
    fontSize: 17,
    fontWeight: '300',
    marginBottom: 4,
  },
  handle: {
    fontSize: 15,
    opacity: 0.8,
    fontWeight: '300',
  },
  timestamp: {
    fontSize: 13,
    opacity: 0.8,
    fontWeight: '300',
  },
});

export default UserBar;
