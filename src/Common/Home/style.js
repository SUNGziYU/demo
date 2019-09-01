import styled from 'styled-components';

export const Homepage = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;
export const Homeleft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .HomeLeftPic{
      width: 625px;
      height: 240px;
  }
`;
export const Homeright = styled.div`
  width: 280px;
  float: right;
`;
export const Topicwrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const Topicitem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topicpic{
    display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
  }
`;
export const Listitem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

export const Listinfo =	styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	width: 280px;
  height: 50px;
  margin-bottom: 10px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;

export const Writeritem = styled.div`
  width: 278px;
  height: 47px;
  margin-top: 10px;
  overflow: hidden;
  .pic{
    border-radius: 50px;
    width: 47px;
    height: 47px;
    display: block;
    float: left;
  }
`;
export const Writerinfo = styled.div`
  width: 231px;
  height: 47px;
  float: right;
  .title {
		line-height: 24px;
		font-size: 13px;
    color: #333;
    padding-left: 20px;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
    color: #999;
    padding-left: 20px;
	}
`;
export const Backtop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
`