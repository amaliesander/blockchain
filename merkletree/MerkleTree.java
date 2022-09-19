package merkletree;

import java.security.MessageDigest;
import java.util.List;

public class MerkleTree{
     //specify used bigest
    
    private MerkleTree leftTree = null;
    private MerkleTree rightTree = null;

    private MerkleTree leftLeaf = null;
    private MerkleTree rightLeaf = null;

    private byte[] digest;

    private final MessageDigest md;

    private byte[] digest(Leaf leaf){
        final List<byte[]> dataBlock = leaf.getDataBlock();

        final int numBlocks = dataBlock.size();
        for (int index=0; index<numBlocks-1;index++){
            md.update(dataBlock.get(index));
        }
        digest = md.digest(dataBlock.get(numBlocks-1));

        return (digest);
        
    }

    public MerkleTree(MessageDigest md){
        this.md = md;
    }

    public void add(final MerkleTree leftTree, final MerkleTree rightTree){
        this.leftTree = leftTree;
        this.rightTree = rightTree;

        md.update(leftTree.digest());
        digest = md.digest(rightTree.digest());
    }

    public void add(final Leaf leftLeaf, final Leaf rightLeaf){
        this.leftLeaf = leftLeaf;
        this.rightLeaf = rightLeaf;

        md.update(digest(leftLeaf));
        digest = md.digest(digest(rightLeaf));
    }

    public MerkleTree leftTree(){
        return (leftTree);
    }

    public MerkleTree rightTree(){
        return (rightTree);
    }

    public Leaf leftLeaf(){
        return (leftLeaf);
    }
    
    public Leaf rightLeaf(){
        return (rightLeaf);
    }

    public byte[] digest(){
        return (digest);
    }

}
