package com.fornula.domain.member.join;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fornula.domain.member.dto.Interest;
import com.fornula.domain.member.dto.Member;

@Repository
public class MemberJoinRepositoryImpl implements MemberJoinRepository {
	
	@Autowired
	private SqlSession sqlSession;
	
	
	
	private static final String namespace = "com.fornula.domain.member.join.MemberJoinMapper";

	@Override
	public int join(MemberDTO memberDTO) throws Exception {
		return sqlSession.getMapper(MemberJoinMapper.class).memberJoin(memberDTO);
	}
	
}
